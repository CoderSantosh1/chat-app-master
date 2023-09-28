import {
  ADD_CONTACTS_GROUPS_LIST,
  ADD_CONTACT_GROUP_TO_LIST,
  ADD_CHATS_LIST_OF_LIST,
  ADD_CHATS_LIST_TO_LIST,
  ADD_CURRENT_CHATS_LIST,
  ADD_CURRENT_CHAT_TO_LIST,
  ADD_GROUP_MEMBERS_LIST,
  ADD_GROUP_MEMBERS_TO_LIST,
  SHOW_CONTACT_FORM,
  SHOW_GROUP_FORM,
  UPDATE_CONTACT_GROUP_ID,
  UPDATE_CHAT_ID,
  ADD_CURRENT_CONTACT_GROUP,
  SHOW_DESCRIPTION,
  SHOW_GROUP_MEMBERS,
  UPDATE_CHATS_LIST_OF_LIST,
  SHOW_SEARCH_RESULTS,
  ADD_SEARCH_RESULTS,
  UPDATE_LAST_CHAT_MSG,
  SHOW_SELECTED_IMG
} from '../actions';

// import { combineReducers } from 'redux';

const initialChattingState = {
  contactsOrGroupsList: [],
  chatsListOfList:[],
  currentChatsList: [],
  groupMembersList: [],
  currentContactOrGroup:{notElement:true},
  setShowContactForm:false,
  setShowGroupForm:false,
  showDescription:false,
  showGroupMembers:false,
  contactOrGroupId:0,
  showSearchResults:false,
  searchResults:[],
  showSelectedImg:false,
};

export default function chatting(state = initialChattingState, action) {
  // fetch chats/contacts-groups/groupMembers and save in store

  switch (action.type) { 
    case ADD_CONTACTS_GROUPS_LIST:
      return {
        ...state,
        contactsOrGroupsList: action.contactsOrGroupsList,
      }; 


    case ADD_CONTACT_GROUP_TO_LIST:
      return {
        ...state,
        contactsOrGroupsList: [action.contactOrGroup, ...state.contactsOrGroupsList],
      };

    case ADD_CURRENT_CONTACT_GROUP:
      return{
        ...state,
        currentContactOrGroup:action.currentContactOrGroup,
      }

      case ADD_CHATS_LIST_OF_LIST:
        return {
          ...state,
          chatsListOfList: action.chatsListOfList,
        };
         
        //just same to add chatsListOfList
        case UPDATE_CHATS_LIST_OF_LIST:
        return { 
          ...state, 
          chatsListOfList: state.chatsListOfList.map((chatListsObj)=>chatListsObj.contactOrGroupId===action.contactOrGroupId?{...chatListsObj ,chatsLists:state.currentChatsList}:chatListsObj )
        };
  
  
      case ADD_CHATS_LIST_TO_LIST:
        return {
          ...state,
          chatsListOfList: [action.chatsList, ...state.chatsListOfList],
        };  

    case ADD_CURRENT_CHATS_LIST:
      return {
        ...state,
        currentChatsList: action.currentChatsList,
      };


    case ADD_CURRENT_CHAT_TO_LIST:
      return {
        ...state,
        currentChatsList: [...state.currentChatsList,action.chat],
      };


    case ADD_GROUP_MEMBERS_LIST:
      return {
        ...state,
        groupMembersList: action.groupMembersList,
      }; 


    case ADD_GROUP_MEMBERS_TO_LIST:
      return {
          ...state,
          groupMembersList: [...action.groupMembers, ...state.groupMembersList],
      };

    case SHOW_CONTACT_FORM:
      return {
        ...state,
        setShowContactForm: action.val,
      };

    case SHOW_GROUP_FORM:
      return {
        ...state,
        setShowGroupForm: action.val,
      };

    case UPDATE_CONTACT_GROUP_ID:
      return{
        ...state,
        contactOrGroupId:action.val
      }

    case UPDATE_CHAT_ID:
      return{
        ...state,
        chatId:action.val
      }

    case SHOW_DESCRIPTION:
      return{
         ...state,
         showDescription:action.val
      }      

    case SHOW_GROUP_MEMBERS:
      return{
         ...state,
         showGroupMembers:action.val
      }
      
    case SHOW_SEARCH_RESULTS:
      return{
         ...state,
         showSearchResults:action.val
      }
      
    case ADD_SEARCH_RESULTS:
      return{
         ...state,
         searchResults:action.searchResults
      }  

      //just same to add chatsListOfList
      case UPDATE_LAST_CHAT_MSG:
        return { 
          ...state, 
          contactsOrGroupsList: state.contactsOrGroupsList.map((contactsOrGroupOBj)=>contactsOrGroupOBj.contactOrGroupId===action.contactOrGroupId?{...contactsOrGroupOBj ,lastChat:action.lastChatMsg}:contactsOrGroupOBj )
        };

     case SHOW_SELECTED_IMG:
      return{
        ...state,
        showSelectedImg:action.val
      }    

    default:
      return state;
  }
}

// export default combineReducers({
// });
