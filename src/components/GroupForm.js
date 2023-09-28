import{Component} from "react"
import '../styles/groupForm.css';
import { StoreContext } from '..';
import {
  addContactOrGroupToList,
  showGroupForm,
  updateContactGroupId,
  addCurrentContactOrGroup,
  addChatsListToList,
  addCurrentChatsList
} from '../actions/index';

 class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName:"",
      selectedProfile:""
    };
  }

  addGroupInList=(e)=>{
   //e.preventDefault();
    const initialGroup={ 
      isGroup:true,
      contactOrGroupId:0,
      contactOrGroupName:'',
      profilePict:require('../assets/myPhoto.jpg'),
      lastChat:{
        text:"",
        date:"",
        time:""
      },
      groupAdmins:[],
      lastActiveUser:{}
    };

    //initial groups
    initialGroup.contactOrGroupName=this.state.groupName;
    initialGroup.groupAdmins[0]=this.props.user;
    initialGroup.lastActiveUser[0]=this.props.user;
    initialGroup.contactOrGroupId=this.props.contactOrGroupId+1;
    initialGroup.profilePict=this.state.selectedProfile;

    //create chatList in chatsListOfList for particular new  contact or group,that you want create
    const initialChatList={
      contactOrGroupId:this.props.contactOrGroupId+1,
      chatsLists:[],
   }

    //console.log("initialContact=",initialContact);
    this.props.dispatch(addContactOrGroupToList(initialGroup));
    this.props.dispatch(addCurrentContactOrGroup(initialGroup));
   
    //update/create chatsListToList or currentChatsList
    this.props.dispatch(addChatsListToList(initialChatList));
    this.props.dispatch(addCurrentChatsList([]));

    this.props.dispatch(updateContactGroupId(this.props.contactOrGroupId+1));
    this.props.dispatch(showGroupForm(!this.props.setShowGroupForm));
  }

  selectProfilePic=(e)=>{
    this.setState({selectedProfile:URL.createObjectURL(e.target.files[0])})
  }


  render(){
    return(
      <form  className="GroupForm">
      <span className="groupFormHeader">Create Group</span>

      <div className="profilePicker">
          {
            this.state.selectedProfile!=="" 
            ?<img className="ProfileImg" src={ this.state.selectedProfile} alt="" />

            :<div>
              <label for="profileSelector" className="selectProfileLabel">+</label>
              <input id="profileSelector"  type="file"   
                   onChange={(e)=>this.selectProfilePic(e)}
               />
            </div>
          }
        </div>

        {
           this.state.selectedProfile!=="" &&
           <div className="anotherProfilePicker">
            <label for="anotherProfileSelector">Select Another Pic</label>

            <input id="anotherProfileSelector"  type="file"   
                   onChange={(e)=>this.selectProfilePic(e)}
            />
          </div>
         }
       

     
      <div className="field">
        <input
          placeholder="Enter Name"
          type="text"
          required
          value={this.state.groupName}
          onChange={(e) => this.setState({groupName:e.target.value})}
        />

        <input
          placeholder="Group Admin"
          type="text"
          required
          value={this.props.user.name}
        />

      </div>
      <div className="field">
        <input
          placeholder="Mobile"
          type="number"
          value={this.props.user.mobile}
        />
      </div>

  
      <div className="field">
        <button  onClick={(e) => this.addGroupInList()}>Create</button>
      </div>
    </form>
    )
  }
}

export default class GroupFormWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <GroupForm 
            dispatch={userAndStore.store.dispatch} 
            contactOrGroupId={userAndStore.store.getState().contactOrGroupId}
            setShowGroupForm={this.props.setShowGroupForm}
            user={userAndStore.user}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}