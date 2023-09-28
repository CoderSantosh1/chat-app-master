import{Component} from "react"
import '../styles/App.css';
import { Navbar,ContactList,ChatBox} from './index';

import {addContactsOrGroupsList,
  updateContactGroupId,
  addChatsListOfList,
  addCurrentChatsList,
  addCurrentContactOrGroup,
addGroupMembersList } from '../actions';

import { data}  from '../data';
import { StoreContext } from '../index';

 class App extends Component{

  componentDidMount() { 
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch(addContactsOrGroupsList(data.contactsOrGroupsList));
    this.props.store.dispatch(updateContactGroupId(data.contactsOrGroupsList.length));
    this.props.store.dispatch(addChatsListOfList(data.chatsListOfList));
    this.props.store.dispatch(addGroupMembersList(data.groupMembersList));
    
   //load default  chat of last active user/index 0 contacts 
   data.chatsListOfList.forEach((chats)=>{
    if(chats.contactOrGroupId===data.contactsOrGroupsList[0].contactOrGroupId){
       this.props.store.dispatch(addCurrentChatsList(chats.chatsLists));
       this.props.store.dispatch(addCurrentContactOrGroup(data.contactsOrGroupsList[0]));
       return;
    }
 })


  }

 render(){
    const { contactsOrGroupsList,chatsListOfList,currentChatsList,currentContactOrGroup,setShowContactForm,setShowGroupForm } = this.props.store.getState();
    //console.log('contactsOrGroupsList', contactsOrGroupsList);
  
  return (
    <div className="App">
      <Navbar
        setShowGroupForm={setShowGroupForm}
      />
      <ContactList 
        contactsOrGroupsList={contactsOrGroupsList}
        setShowContactForm={setShowContactForm}
        chatsListOfList={chatsListOfList}
      />
      <ChatBox
        currentChatsList={currentChatsList}
        currentContactOrGroup={currentContactOrGroup}
      />
    </div>
  );
 }
}


class AppWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => <App store={userAndStore.store} />}
      </StoreContext.Consumer>
    );
  }
}

export default AppWrapper;