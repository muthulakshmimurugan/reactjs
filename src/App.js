import logo from './logo.svg';
import './App.css';
import Gallery from './state';
import Clock from './lifecycle';
import Toggle from './events';

 function AppTest() {
  return (
    /* <div id="root">         
    </div>  */
    <div id="root">
      <Gallery />
      <Clock />
      <Toggle />
    </div>

      
  );
} 





export default AppTest;
