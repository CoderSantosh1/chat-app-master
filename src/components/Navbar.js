import React, { Component } from 'react';
import '../styles/navbar.css'
import { GroupForm } from '.';
import { StoreContext } from '..';
import {showGroupForm} from '../actions/index'

 class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  
  handleCreateGroupBtnClick=(e)=>{
    this.props.dispatch(showGroupForm(!this.props.setShowGroupForm));
   }

  render() {
    const {contactOrGroupId}=this.props;
    return (
      <div className="nav">
       <div className='rounded-img-container'>
         <img src={this.props.user.profilePic} alt="user-pic" />
       </div>

         <button className='create-group'  onClick={this.handleCreateGroupBtnClick}>+ Create Group</button>
         
         { this.props.setShowGroupForm && <GroupForm 
              contactOrGroupId={contactOrGroupId}
              setShowGroupForm={this.props.setShowGroupForm}
              />}

      </div>
    );
  }
}


export default class NavbarWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <Navbar 
            dispatch={userAndStore.store.dispatch} 
            setShowGroupForm={this.props.setShowGroupForm}
            contactsOrGroupsList={this.props.contactsOrGroupsList}
            contactOrGroupId={userAndStore.store.getState().contactOrGroupId}
            user={userAndStore.user}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}