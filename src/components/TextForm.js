import React , {useState} from "react";  // importing state by adding {useState}

export default function TextForm(props) { 
  const [text, setText] = useState ('Enter text here');  // creating hook
  // text = "new text" wrong way to chnage state
  // setText("new text") correct way to chnge state

  const handleUpperClick = () =>{
    //console.log("Upper case was clicked" + text); // print how may times button clicked and print what is the text inside text area
    let newText = text.toUpperCase(); // newText variable convert the text to upper case
    setText(newText); // we need to pass newText value to setText in state concept
  }

  const handleLowerClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClrClick= () =>{
    let newText = ('');
    setText(newText);
  }

  const handleExtraSpaceClick = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleCopyClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied to Clipboard", "success");
  }

    //const handleCamelClick = () => {
  //  let newText = text.charAt(0).toUpperCase() + text.slice(1);
   // setText(newText);
 // }

  function handleCamelClick() {
    let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
    setText(newText);
  }
  ///const handleCamelClick = () =>{
    //let newText = text.split(" ");                    wrong code
    //newText.map((text) => { 
       // return text[0].toUpperCase() + text.substring(1); 
    //}).join(" ");
    //setText(newText);
  

  const handleOnChange = (event) =>{
    //console.log("On Change");
    setText(event.target.value);// 
  }
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className= "mb-3">
        <textarea
          value={text}
          onChange = {handleOnChange}
          className="form-control my-3" 
          id="myBox"
          rows="8"
          style={{backgroundColor : props.mode === 'dark' ? '#183244' : 'white', color : props.mode === 'dark' ? 'white' : '#6c767d'}}
        ></textarea>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpperClick}>Conevrt to Upper case</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Conevrt to Lower case</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClrClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCamelClick}>Convert To Camel Case</button>
      </div>
      </div>

      <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter(function(n) {return n !== '' }).length} Words and {text.length} Charecters</p>
        <p>{0.008 * text.split(" ").length} Minutes to take read the text </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter your text to preview"}</p>
      </div>
    </>
  );
}
