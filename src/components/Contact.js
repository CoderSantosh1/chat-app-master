import{Component} from "react"
import '../styles/contact.css'
//left sidebar item
import {addCurrentChatsList,addCurrentContactOrGroup,showDescription,showGroupMembers,showSelectedImg } from '../actions/index';
import { StoreContext } from '..';

 class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover:false
    };
  }

  handleContactClick=(contactOrGroupId)=>{
    console.log("contactOrGroupId=",contactOrGroupId);
    //console.log("chatsListOfList=",this.props.chatsListOfList);
    this.props.chatsListOfList.forEach((chats)=>{
       if(chats.contactOrGroupId===contactOrGroupId){
          this.props.dispatch(addCurrentChatsList(chats.chatsLists));
          this.props.dispatch(addCurrentContactOrGroup(this.props.contactOrGroup));
          this.props.dispatch(showDescription(false));
          this.props.dispatch(showGroupMembers(false));
          this.props.dispatch(showSelectedImg(false));
          return;
       }
    })
      
    //this.props.dispatch(addCurrentChatsList([]));
    this.props.dispatch(addCurrentContactOrGroup(this.props.contactOrGroup));
 
  }

  render(){
    const {contactOrGroup}=this.props;
    return(
        <div className="Contact" 
         onMouseEnter={()=>this.setState({isHover:true})}
         onMouseLeave={()=>this.setState({isHover:false})}
         onClick={()=>this.handleContactClick(contactOrGroup.contactOrGroupId)}
        >
            <div>
              <span className='rounded-img-container'>
                <img src={contactOrGroup.profilePict} alt="profile" />
              </span>
               
              {
                contactOrGroup.isGroup && this.state.isHover &&
                <span className='rounded-img-container right-pic'>
                 <img src={contactOrGroup.lastActiveUser[0].profilePic} alt="profile" />
                </span>
              }

              <span className="lastChatContainer">
                <span>{contactOrGroup.contactOrGroupName}</span>
                {
                  contactOrGroup.isGroup && this.state.isHover &&
                  <span>{","+contactOrGroup.lastActiveUser[0].name+"..."}</span>
                }
                <p>{contactOrGroup.lastChat.text}</p>
              </span> 
            </div>

            <div className="lastChatTiming">
              <span>{contactOrGroup.lastChat.time}</span>
              <span>{contactOrGroup.lastChat.date} </span>
            </div>
        </div>
    )
  }
}


export default class ContactWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <Contact 
            dispatch={userAndStore.store.dispatch} 
            chatsListOfList={this.props.chatsListOfList}
            contactOrGroup={this.props.contactOrGroup}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}