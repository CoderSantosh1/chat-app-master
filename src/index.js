import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './styles/index.css';
import App from './components/App';
import chatting from './reducers';
// import rootReducer from './reducers';

//logger 
const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('ACTION', action);
  next(action);
};

const store = createStore(chatting, applyMiddleware(logger, thunk));
// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log(store);
console.log('state', store.getState());

export const StoreContext = createContext();
console.log('StoreContext', StoreContext);

const user={
  name:"Prem",
  mobile:9301511759,
  profilePic:require('./assets/myPhoto.jpg'),
  contactId:0, //like user id
}

class Provider extends React.Component {
  render() {
    const { userAndStore} = this.props;
    return (
      <StoreContext.Provider value={userAndStore}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

const userAndStore={
  user:user,
  store:store,
}

ReactDOM.render(
  <Provider userAndStore={userAndStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);