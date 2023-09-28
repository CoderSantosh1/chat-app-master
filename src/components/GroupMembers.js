import{Component} from "react"
import '../styles/groupMember.css'
export default class GroupMembers extends Component {
  
  render(){
    const {currentGroupMemberList,dispatch}=this.props;
    console.log("currentGroupMemberList=",currentGroupMemberList)
    return(
        <div className="GroupMembers">
             {
              currentGroupMemberList.map((member,index)=>{
                 return(
                  <div className="groupMember">

                   <div className="memberItems">
                   <div className='roundedImageContainer'>
                     <img src={member.profilePict} alt="user-pic" />
                   </div>

                   <span className="contactNames">{member.contactName}</span>
                   </div>

                   <span className="contactNames">{"+ "+member.mobileNumber}</span>
                   
                  </div>
                 );
              })
             }
        </div>
    )
  }
}