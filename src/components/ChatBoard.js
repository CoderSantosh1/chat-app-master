import{Component} from "react"
import '../styles/chatBoard.css';
import {addCurrentChatToList,updateChatsListOfList,updateLastChatMsg,showSelectedImg} from '../actions/index'
export default class ChatBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputChat:'',
      inputImg :'',
      sendingType:"text"
    };
  }

 //get current time in hour,minutes, and AM or PM and date
 getCurrentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let am_pm = (hour >= 12 && hour < 24) ? 'PM' : 'AM';

  hour = (hour > 12) ? hour - 12 : hour;
  if (hour === 0) {
      hour = 12;
  }

   hour= hour<10? "0"+hour :hour;
   minute= minute<10? "0"+minute :minute;

   const time=hour+":"+minute+" "+am_pm
   const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

  return {
    time:time,
    date:currentDate
  };
}

  SendChat=()=>{
  //  console.log("input chat is",this.state.inputChat);

     const {date,time}=this.getCurrentTime();
     const {name,mobile,profilePic}=this.props.user;

     const initialChats={
          isMyMessage:true,
          senderName:"",
          mobileNumber:'',
          senderPict:"",
          date:'',
          time:'',
          content:"",
          contentType:"text",
          chatId:new Date().getTime(),

        } 
        
        initialChats.date=date;
        initialChats.time=time;
        initialChats.senderName=name;
        initialChats.mobileNumber=mobile;
        initialChats.senderPict=profilePic;

        if(this.state.sendingType==="text"){
          initialChats.content=this.state.inputChat;
        }else{
          initialChats.content=this.state.inputImg;
          initialChats.contentType="img";
        }
       
        console.log("initialChats=",initialChats)
        //update currentChaList
        this.props.dispatch(addCurrentChatToList(initialChats));

        //if i want to save my  chat when open another chat and reopen this user chat .then need to
        //also update chatsListOList  with currentChaList
        //update  chatsList Of chatsListOfList   to currentChaList, 
        //identified by contactOrGroupId
        //we already update currentChaList on top ,line 63 ,so we need pass id for reducer
        //only because chatsListOList, currentChaList both available in reducer state
        //so don,t need to pass it ,or separate action function
        this.props.dispatch(updateChatsListOfList(this.props.contactOrGroupId));

       const lastChat={
          text:initialChats.content,  
          date:date,
          time:time
        }
        
        //Update lastChat massage
          
        if(initialChats.contentType==="text"){
          if(lastChat.text.length>30){
            lastChat.text=lastChat.text.substring(0,30);
          }
          this.props.dispatch(updateLastChatMsg(this.props.contactOrGroupId,lastChat));
        }
          
        //also ,we required to update currentContactOrGroup lastChat massage , but now skip because we don,t show last message in description

        this.setState({inputChat:''});
        this.setState({inputImg:''});
        // this.setState({showSelectedImg:false});
        this.props.dispatch(showSelectedImg(false));
        this.setState({sendingType:"text"});
      
 
  }

  handleImageSelect =(e)=>{
    this.setState({inputImg:URL.createObjectURL(e.target.files[0])})
    // this.setState({showSelectedImg:true});
    this.props.dispatch(showSelectedImg(true));
    this.setState({sendingType:"img"});

    // console.log("inputImg=",URL.createObjectURL(e.target.files[0]));
    // console.log("inputImg=",this.state.inputImg);
  }
  

  closeImagePost=()=>{
    this.setState({inputChat:''});
    this.setState({inputImg:''});
    this.props.dispatch(showSelectedImg(false));
    this.setState({sendingType:"text"});
  }

  render(){
   
    return(
        
         <div>
             {
              this.props.showSelectedImg &&
              <div className="sendingImgContainer">
                 <img src={this.state.inputImg} alt=""/>
                 <button className="sendImageBtn" onClick={()=>this.closeImagePost()}> close</button>
                 <button className="sendImageBtn" onClick={()=>this.SendChat()}> send</button>
              </div>
             }
            
            <div className="ChatBoard">
           
              <div className="mediaSelectContainer">
                <label for="selectMediaInput">
                   <img src={require('../assets/attachfile.png')} alt="" />
                </label>
                <input id="selectMediaInput" className="mediaBtn" type="file"   
                   onChange={(e)=>this.handleImageSelect(e)}
                />
              </div>
              

              <textarea 
               value={this.state.inputChat} 
               onChange={(e)=>{ this.setState({inputChat:e.target.value})}} 
               type="text" className="chatInput">
              </textarea>

              <button className="sendChatBtn" onClick={()=>this.SendChat()}>
                <img src={require('../assets/send.png')} alt="" />
              </button>
            </div>
          </div>
    )
  }
}




// {/* <div className="mediaBoard">
// {
//   this.state.sendMedia &&
//    <div className="mediaPicContainer">
//       <img src="" alt=""/>
//    </div>
// }
// </div> */}