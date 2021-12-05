import React, {useState} from 'react'



export default function TextForm(props) {

    const [text,setText] = useState("");

   const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () =>{
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    
    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

   let arr = text.split(" ");
    const handleCapital = () =>{
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
           
        }
        let str = arr.join(" ");
        setText(str);
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.heading}</h1>
            <div className="mb-3 my-4">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCapital}>Capitalize Case</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>

            <h2>Your text summary</h2>
            <p>{text.split(" ").length} word and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minute(s) required to read this text</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text:"Enter something in the above text box to preview"}</p>
        </div>
        </>
    )
}
