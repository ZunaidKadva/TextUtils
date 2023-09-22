import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        if(text.length>0){
            props.showAlert("Converted to uppercase!","success")
        }
        else{
            props.showAlert("Please, write something into the TextBox","warning")
        }
    }
    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText)
        if(text.length>0){
            props.showAlert("Converted to lowercase!","success")
        }
        else{
            props.showAlert("Please, write something into the TextBox","warning")
        }
    }
    const handleClearClick =() =>{
        let newText = '';
        setText(newText)
        if(text.length>0){
            props.showAlert("cleared the text","success")
        }
        else{
            props.showAlert("TextBox is already empty!!!!","info")
        }
    }
    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        if(text.length>0){
            props.showAlert("Text Copied to Clipboard!","success")
        }
        else{
            props.showAlert("Please, write something into the TextBox","warning")
        }
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text.length>0){
            props.showAlert("Extra spaces has been removed!","success")
        }
        else{
            props.showAlert("Please, write something into the TextBox","warning")
        }
    }
     
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
            <textarea rows="10" className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#1a6580', color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id='myBox'></textarea>
        </div>
         {/* disabled={text.length===0} can be used in button attribute to disabled the button only if there is no text inside the TextBox.  */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        
        <h2>Your text Summary</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
        <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</b></p>
        <h2>Preview</h2>
        <p>{text.length===0 ? 'Nothing to preview': text }</p>
    </div>
    </>
  )
}
