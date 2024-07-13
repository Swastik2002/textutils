import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        console.log("Uppercase was clicked: " + text + ". Changed to: " + newText);
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        console.log("Lowercase was clicked: " + text + ". changed to: " + newText);
        setText(newText);
    }

    const handleEmailClick = ()=>{
        let words = text.split(" ");
        let newText = "";

        words.forEach(myFunc)

        function myFunc(item, index, arr)
        {
            if(item.includes("@"))
                {
                    if(item.includes(".com"))
                    {
                        newText = newText + " " + item;
                    }
                }
        }

        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    //text = "new text"; //Wrong Method
    //setText("new text"); //Correct Method 

    return (
    <>    
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleEmailClick}>Extract Email</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Words Per Minute</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}
