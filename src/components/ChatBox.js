import{Component} from "react"
import '../styles/chatBox.css';
import {ReceivingChat,SendingChat,Descriptions,ChatBoard} from './index';
import {showDescription,showGroupMembers} from '../actions/index';
import { StoreContext } from '..';

 class ChatBox extends Component {
  
  handleDescriptionClick=()=>{
    this.props.dispatch(showDescription(!this.props.showDescription));
    this.props.dispatch(showGroupMembers(false));
   }
 
  render(){
    const {currentChatsList,currentContactOrGroup,showDescription} =this.props;
    //console.log("currentChatsList=",currentChatsList);
    return(
       
        <div className="ChatBox">
         {
          currentContactOrGroup.isGroup?
          <header className="chatBoxHeader">
           <div className="membersImg" onClick={()=>this.handleDescriptionClick()}>
             <span className='roundedImageContainer'>
               <img src={currentContactOrGroup.profilePict} alt="user-pic" />
             </span>

             <span className='roundedImageContainer'>
               <img src={currentContactOrGroup.groupAdmins[0].profilePic} alt="user-pic" />
             </span>

             <span className='roundedImageContainer'>
               <img src={currentContactOrGroup.lastActiveUser[0].profilePic} alt="user-pic" />
             </span>
           </div>

            <span className="contactNames"
               onClick={()=>this.handleDescriptionClick()}
            >{currentContactOrGroup.contactOrGroupName+" ~ "+currentContactOrGroup.groupAdmins[0].name+","+currentContactOrGroup.lastActiveUser[0].name}...</span>
            <button className="addGroupMemberBtn">+</button>
          </header>
          : 
          <header className="chatBoxHeader">
            <div className='roundedImageContainer'>
              <img src={currentContactOrGroup.profilePict} alt="user-pic" />
            </div>
            <span className="contactNames">{currentContactOrGroup.contactOrGroupName+" ~ "+currentContactOrGroup.mobileNumber}</span>
            <button className="description" onClick={()=>this.handleDescriptionClick()}>
               Description...
            </button>
          </header>
         }
        
        {
          showDescription && 
          <Descriptions
            currentContactOrGroup={currentContactOrGroup}
          />
        }

          <main className="chatBoxMain">
          {currentChatsList.map((chat,index) => (
             
             chat.isMyMessage?<SendingChat chat={chat} key={`chat-${index}`}/>
                            :<ReceivingChat chat={chat} key={`chat-${index}`}/>
            
          ))}
          </main>

          <footer className="chatBoxFooter">
             <ChatBoard
               user={this.props.user}
               dispatch={this.props.dispatch}
               contactOrGroupId ={currentContactOrGroup.contactOrGroupId}
               showSelectedImg={this.props.showSelectedImg}
             />
          </footer>
        </div>
    )
  }
}


export default class ChatBoxWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <ChatBox 
            dispatch={userAndStore.store.dispatch} 
            currentChatsList={this.props.currentChatsList}
            currentContactOrGroup={this.props.currentContactOrGroup}
            showDescription={userAndStore.store.getState().showDescription}
            user={userAndStore.user}
            showSelectedImg={userAndStore.store.getState().showSelectedImg}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}
