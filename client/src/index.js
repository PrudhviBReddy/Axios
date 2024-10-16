import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

let initialData = {
  loginDetails:{},
}

let loginReducer = (latestData = initialData,action)=>{
  console.log("inside loginReducer")
  console.log(action);
  
  if(action.type == "login"){
  return {...latestData,loginDetails:action.data};
  }
  
  return latestData;
  };

let tasksReducer = (latestData = initialData,action)=>{
console.log("inside tasksReducer");
console.log(action);

if((action.type == "assignTask")){
  console.log(action.type);
}else if((action.type == "submitTask")){
  console.log(action.type);
}else if((action.type == "approveTask")){
  console.log(action.type);
}else if((action.type == "rejectTask")){
  console.log(action.type);
}

return latestData;
};


let leavesReducer = (latestData = initialData,action)=>{
  console.log("inside leavesReducer");
  console.log(action);
  
  if((action.type == "applyLeave")){
    console.log(action.type);
  }else if((action.type == "rejectLeave")){
    console.log(action.type);
  }else if((action.type == "cancelLeave")){
    console.log(action.type);
  }else if((action.type == "postponeLeave")){
    console.log(action.type);
  }
  
  return latestData;
  };

let store = createStore(combineReducers({loginReducer, tasksReducer, leavesReducer}),applyMiddleware(thunk)); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
