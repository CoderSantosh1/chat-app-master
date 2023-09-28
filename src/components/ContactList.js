import{Component} from "react";
import '../styles/contactList.css';
import {SearchBar,Contact,ContactForm} from './index';
import { StoreContext } from '..';
import {showContactForm,showSearchResults} from '../actions/index'

//left sidebar

export  class ContactList extends Component {

  handleAddContactsBtnClick=(e)=>{
   this.props.dispatch(showContactForm(!this.props.setShowContactForm));
  }

  handleHideSearchBtnClick=(e)=>{
    this.props.dispatch(showSearchResults(false));
   }

  render(){
     const {contactsOrGroupsList,contactOrGroupId,showSearchResults,searchResults}=this.props;
    return(
        <div className="ContactList">
             <SearchBar
              contactsOrGroupsList={contactsOrGroupsList}
              dispatch={this.props.dispatch}
             />
             
             {/* show search Results */}
             {
              showSearchResults &&
               <div className="searchResults">
                <button className="hideSearchResultsBtn" onClick={()=>this.handleHideSearchBtnClick()}>hide</button>
                 {searchResults.map((contactOrGroup,index) => (
                   <Contact 
                     contactOrGroup={contactOrGroup} 
                     chatsListOfList={this.props.chatsListOfList}
                     key={`searchResults-${index}`}
                   />
                 ))}
                 
                 {
                  searchResults.length===0 &&
                  <h3 className="notFoundResults">Not FoundResults </h3>
                 }
               </div>
              }

             <div className="contactHeading">
               <span>Conversation</span>
               <button onClick={this.handleAddContactsBtnClick}>+</button>
             </div>

             { this.props.setShowContactForm && <ContactForm 
              contactOrGroupId={contactOrGroupId}
              setShowContactForm={this.props.setShowContactForm}
              />}

             <div className="contactsListMain">
             {contactsOrGroupsList.map((contactOrGroup,index) => (
              <Contact 
                contactOrGroup={contactOrGroup} 
                chatsListOfList={this.props.chatsListOfList}
                key={`contact-${index}`}
              />
            ))}
             </div>
              
        </div>
    )
  }
}


export default class ContactListWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <ContactList 
            dispatch={userAndStore.store.dispatch} 
            setShowContactForm={this.props.setShowContactForm}
            contactsOrGroupsList={this.props.contactsOrGroupsList}
            contactOrGroupId={userAndStore.store.getState().contactOrGroupId}
            chatsListOfList={this.props.chatsListOfList}
            showSearchResults={userAndStore.store.getState().showSearchResults}
            searchResults={userAndStore.store.getState().searchResults}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}