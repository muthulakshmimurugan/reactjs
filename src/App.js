import logo from './logo.svg';
import './App.css';
import Gallery from './state';
import Clock from './lifecycle';
import Toggle from './events';
import LoginControl from './conditionalRendering';
import Mailbox from './inlineIfConditional';
import List from './renderingList';
import MyForm from './forms';
import EssayForm from './textarea';
import FlavorForm from './select';
import Accordion from './sharingComponents';
import Calculator from './calculator';

 function AppTest() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    
    <div id="root">
      <Gallery />
      <Clock />
      <Toggle />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <List />
      <MyForm />
     <EssayForm /> 
    <FlavorForm />
    <Accordion />
    <Calculator />
    </div>

      
  );
} 





export default AppTest;
