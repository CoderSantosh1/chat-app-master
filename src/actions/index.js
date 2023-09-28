   // action types
export const ADD_CONTACTS_GROUPS_LIST = 'ADD_CONTACTS_GROUPS_LIST'; //done
export const ADD_CONTACT_GROUP_TO_LIST = 'ADD_CONTACT_GROUP_TO_LIST';//done
export const ADD_CURRENT_CONTACT_GROUP='ADD_CURRENT_CONTACT_GROUP';//done

export const ADD_CHATS_LIST_OF_LIST = 'ADD_CHATS_LIST_OF_LIST';//done
export const UPDATE_CHATS_LIST_OF_LIST = 'UPDATE_CHATS_LIST_OF_LIST';//done
export const ADD_CHATS_LIST_TO_LIST = 'ADD_CHATS_LIST_TO_LIST';//done

export const ADD_CURRENT_CHATS_LIST = 'ADD_CURRENT_CHATS_LIST';//done
export const ADD_CURRENT_CHAT_TO_LIST = 'ADD_CURRENT_CHAT_TO_LIST';//done

export const ADD_GROUP_MEMBERS_LIST = 'ADD_GROUP_MEMBERS_LIST'; //done
export const ADD_GROUP_MEMBERS_TO_LIST = 'ADD_GROUP_MEMBERS_TO_LIST'; 

export const SHOW_CONTACT_FORM = 'SHOW_CONTACT_FORM';//done
export const SHOW_GROUP_FORM = 'SHOW_GROUP_FORM';//done

export const UPDATE_CONTACT_GROUP_ID = 'UPDATE_CONTACT_GROUP_ID';//done
export const UPDATE_CHAT_ID = 'UPDATE_CHAT_ID';

export const SHOW_DESCRIPTION = 'SHOW_DESCRIPTION';//done
export const SHOW_GROUP_MEMBERS = 'SHOW_GROUP_MEMBERS';//done

export const SHOW_SEARCH_RESULTS = 'SHOW_SEARCH_RESULTS';//done
export const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULTS';//done

export const UPDATE_LAST_CHAT_MSG = 'UPDATE_LAST_CHAT_MSG';//done this update last chat massage in contactsOrGroupList
export const SHOW_SELECTED_IMG = 'SHOW_SELECTED_IMG';//done


   
// action creators
export function addContactsOrGroupsList(contactsOrGroupsList) {
  return {
    type: ADD_CONTACTS_GROUPS_LIST,
    contactsOrGroupsList,
  };
}

export function addContactOrGroupToList(contactOrGroup) {
  return {
    type: ADD_CONTACT_GROUP_TO_LIST,
    contactOrGroup, 
  };
}

export function addCurrentContactOrGroup(currentContactOrGroup) {
  return {
    type: ADD_CURRENT_CONTACT_GROUP,
    currentContactOrGroup, 
  };
}




export function addChatsListOfList(chatsListOfList) {
  return {
    type: ADD_CHATS_LIST_OF_LIST,
    chatsListOfList,
  };
}

export function updateChatsListOfList(contactOrGroupId) {
  return {
    type: UPDATE_CHATS_LIST_OF_LIST,
    contactOrGroupId,
  };
}

export function addChatsListToList(chatsList) {
  return {
    type: ADD_CHATS_LIST_TO_LIST,
    chatsList,
  };
}


export function addCurrentChatsList(currentChatsList) {
  return {
    type: ADD_CURRENT_CHATS_LIST,
    currentChatsList,
  };
}

export function addCurrentChatToList(chat) {
  return {
    type: ADD_CURRENT_CHAT_TO_LIST,
    chat,
  };
}

export function addGroupMembersList(groupMembersList) {
  return {
    type: ADD_GROUP_MEMBERS_LIST,
    groupMembersList,
  };
}


export function addGroupMembersToList(groupMembers) {
  return {
    type: ADD_GROUP_MEMBERS_TO_LIST,
    groupMembers,
  };
}

export function showContactForm(val) {
  return {
    type: SHOW_CONTACT_FORM,
    val,
  };
}

export function showGroupForm(val) {
  return {
    type: SHOW_GROUP_FORM,
    val,
  };
}
  export function updateContactGroupId(val) {
    return {
      type: UPDATE_CONTACT_GROUP_ID,
      val,
    };
  }

export function updateChatId(val) {
  return {
    type: UPDATE_CHAT_ID,
    val,
  };
}

export function showDescription(val) {
  return {
    type: SHOW_DESCRIPTION,
    val,
  };
}

export function showGroupMembers(val) {
  return {
    type: SHOW_GROUP_MEMBERS,
    val,
  }
}

export function showSearchResults(val) {
  return {
    type: SHOW_SEARCH_RESULTS,
    val,
  }
}

export function addSearchResults(searchResults) {
  return {
    type: ADD_SEARCH_RESULTS,
    searchResults,
  }
}

export function updateLastChatMsg(contactOrGroupId,lastChatMsg) {
  return {
    type: UPDATE_LAST_CHAT_MSG,
    contactOrGroupId,
    lastChatMsg,
  }
}

export function showSelectedImg(val) {
  return {
    type: SHOW_SELECTED_IMG,
    val,
  }
}