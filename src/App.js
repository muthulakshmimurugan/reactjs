import logo from './logo.svg';
import './App.css';
import Gallery from './state';
import Clock from './lifecycle';
import Toggle from './events';
import LoginControl from './conditionalRendering';
import Mailbox from './inlineIfConditional';

 function AppTest() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    /* <div id="root">         
    </div>  */
    <div id="root">
      <Gallery />
      <Clock />
      <Toggle />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
    </div>

      
  );
} 





export default AppTest;
