import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));
  
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef();

  function FancyFwdRef(){
  return (
     <FancyButton ref={ref}>Click me!</FancyButton>
  )
  }

  export default FancyFwdRef;