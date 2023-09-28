import{Component} from "react"
import '../styles/sendingChat.css'
export default class SendingChat extends Component {
  render(){
    const {chat}=this.props;
    return(
      <div className="SendingChat">
        <div className="send-chat-container">

          <div className="senderInfo">
            <span className="contactNames">You</span>
            <span className='sender-img-container'>
              <img src={chat.senderPict} alt="user-pic" />
            </span>
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