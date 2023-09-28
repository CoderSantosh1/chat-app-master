import{Component} from "react"
import '../styles/receivingChat.css';
export default class ReceivingChat extends Component {
  render(){
    const {chat}=this.props;
    return(
      <div className="ReceivingChat">
        <div className="send-chat-container">

          <div className="senderInfo">
            <span className='sender-img-container'>
              <img src={chat.senderPict} alt="user-pic" />
            </span>
            <span className="contactNames">~{chat.mobileNumber}</span>
            <span className="contactNames">~{chat.senderName}</span>
          </div>

          <div className="chatMessage">
            {chat.contentType==="img"?
              <div className="chatImg"> <img src={chat.content} alt="content" /></div>
              :
              <p>{chat.content}</p>
            }
          </div>

          <div className="dateAndTime">
            <span>{chat.date}</span>
            <span>{chat.time}</span>  
          </div>
        </div>
      </div>
    )
  }
}