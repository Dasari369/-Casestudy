//import logo from './logo.svg';
//import './App.css';

import store from './Redux/store'
import CakeContainer from './Redux/CakeContainer'
import { Provider } from 'react-redux';
import CounterOne from './ReducerHook/CounterOne';
import HookuseEffectCounter from './useEffectComponents/HookuseEffectCounter';
import ClassuseEffect from './useEffectComponents/ClassuseEffect';
import CountHook from './CustomHookCreation/CountHook';
import MyClassComponent from './MyClassComponent';
//import person from './func';
function App() {
  return (
    
    <div className='App'>
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div>
    </Provider>
    <CounterOne></CounterOne>
    <HookuseEffectCounter></HookuseEffectCounter>
    <ClassuseEffect></ClassuseEffect>
    <CountHook></CountHook>
    <MyClassComponent></MyClassComponent>
    <person></person> 
   
   
    </div>
  );
}

export default App;
