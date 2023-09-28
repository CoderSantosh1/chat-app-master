import{Component} from "react"
import { StoreContext } from '..';
import {GroupMembers} from './index';
import {showGroupMembers} from '../actions/index'
import '../styles/descriptions.css'
 class Descriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGroupMemberList:[],
    };
  }
  
  handleShowGroupMemberBtnClick=(contactOrGroupId)=>{
    
    if( this.props.showGroupMembers){
      this.props.dispatch(showGroupMembers(false));
      return;
    }
    
    //console.log("contactOrGroupId=",contactOrGroupId)
    //console.log("this.props.groupMembersList=",this.props.groupMembersList)
    this.props.groupMembersList.forEach((members)=>{
      //console.log("members=",members)
       if(members.groupId===contactOrGroupId){
          this.setState({
            currentGroupMemberList:members.members,
          })
          this.props.dispatch(showGroupMembers(true));
          return;
       }
    })
  }


  render(){
    const {currentContactOrGroup,showGroupMembers,} =this.props;
    return(
        <div className="Descriptions">

        {
          currentContactOrGroup.isGroup?
          <div className="descriptionContent">

             <div className="groupORContactHeading">
               <div className='roundedImageContainer'>
                 <img src={currentContactOrGroup.profilePict} alt="user-pic" />
               </div>
               <span className="contactNames">{currentContactOrGroup.contactOrGroupName}</span>
              </div>

              <div className="groupHeadingItem">
               <div className='roundedImageContainer'>
                 <img src={currentContactOrGroup.groupAdmins[0].profilePic} alt="user-pic" />
               </div>
               <span className="contactNames">{currentContactOrGroup.groupAdmins[0].name+" ~ "+currentContactOrGroup.groupAdmins[0].mobile}</span>
               <span className="contactsType">Group Admin</span>
              </div>
              
              <div className="groupHeadingItem">
               <div className='roundedImageContainer'>
                 <img src={currentContactOrGroup.lastActiveUser[0].profilePic} alt="user-pic" />
               </div>
               <span className="contactNames">{currentContactOrGroup.lastActiveUser[0].name+" ~ "+currentContactOrGroup.lastActiveUser[0].mobile}</span>
               <span className="contactsType">Last Active</span>
              </div>

              <button className="shoGroupMemberBtn" onClick={()=>this.handleShowGroupMemberBtnClick(currentContactOrGroup.contactOrGroupId)}>
                Show Group Members...
              </button>

              {
               showGroupMembers &&
               <GroupMembers
                  currentGroupMemberList={this.state.currentGroupMemberList}
                  dispatch={this.props.dispatch}
               />
             }

          </div>
          : 
          <div className="descriptionContent">
            <div className="groupORContactHeading">
               <div className='roundedImageContainer'>
                 <img src={currentContactOrGroup.profilePict} alt="user-pic" />
               </div>
               <span className="contactNames">{currentContactOrGroup.contactOrGroupName+"~"+currentContactOrGroup.mobileNumber}</span>
              </div>
          </div>
         }
        
          {/* <main className="descriptionMain">
             
          </main> */}
        </div>
    )
  }
}


export default class DescriptionsWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <Descriptions 
            dispatch={userAndStore.store.dispatch} 
            currentContactOrGroup={this.props.currentContactOrGroup}
            showGroupMembers={userAndStore.store.getState().showGroupMembers}
            groupMembersList={userAndStore.store.getState().groupMembersList}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}