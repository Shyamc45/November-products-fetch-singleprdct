import React, {useState} from "react";

function Text = () => {
  const [name, setname] = useState("");
  

  const focusInput = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };
  
  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={focusInput} > Enter </button>
    </div>
  );
}

export default TextInput;