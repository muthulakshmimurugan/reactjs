import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTest from './App';


/*const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
*/

 /* function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(element); 

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//const element = <Welcome name="Sara" />;
root.render(<App />);
*/

/* props 
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppTest />);

