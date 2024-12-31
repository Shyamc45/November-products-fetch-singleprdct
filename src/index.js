import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/script';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';  
// import App from './App'; 
// import Counter from './Components/ReactHooks/Usestate';
// import Time from './Components/ReactHooks/UseEffect';
// import ExpensiveCalculation from './Components/ReactHooks/UseMemo';
// import TextInput from './Components/ReactHooks/UseRef';
// import LoginRegister from './Components/register';
// import "bootstrap/dist/css/bootstrap.min.css"
// import Component  from './Components/ReactHooks/UseContext';
// import LoginContextProvider from './Components/ReactHooks/context/LoginContextProvider';
// import MainComponent from './Components/ReactHooks/MainComponent';












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

//UseState
  // <React.StrictMode>
  //   <Counter/>
  //   </React.StrictMode>


//UseEffect
    // <React.StrictMode>
    // <Time/>
    // </React.StrictMode>


//UseContext
    // <React.StrictMode>
    //   <LoginContextProvider>
    //   <Component/>
    //   </LoginContextProvider>
    // </React.StrictMode>


//UseMemo
    // <React.StrictMode>
    // <ExpensiveCalculation/>
    // </React.StrictMode>


//UseRef
    // <React.StrictMode>
    // <TextInput/>
    // </React.StrictMode>


    // <React.StrictMode>
    //   <LoginRegister/>


    // </React.StrictMode>




<React.StrictMode>
  <App/>
</React.StrictMode>





  // <React.StrictMode>
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>
  // </React.StrictMode>
);