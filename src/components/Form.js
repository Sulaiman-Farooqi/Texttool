
import React, { useState } from 'react'


export default function Form(props) {
    const [text, setText] = useState("")
    const handleUpclick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnclick = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        let text= document.getElementById('exampleFormControlTextarea1')
        text.select()
        navigator.clipboard.writeText(text.value)
        
        
       
      
    }
    const handleClear = () => {
        let newText= ""
        setText(newText)
        
        
       
      
    }
     

    return (
        <>

            <div>
                <div className="container1" >
                    <div className="mb-3" id="cont"style={{color:props.mode==='light'?'black':'white', fontFamily:"sans-serif"}}>
                        <h1>{props.heading}</h1>
                        <label htmlfor="exampleFormControlTextarea1" style={{color:props.mode==='light'?'black':'white'}}className="form-label" id="text"><b><span style={{color:"blue"}}>Enter</span> the text here</b></label>
                        <textarea className="form-control "style={{backgroundColor:props.mode==='light'?'white':'black',border:"1px solid blue"}} value={text} onChange={handleOnclick} id="exampleFormControlTextarea1" rows="7"></textarea>
                        <button className="btn btn-primary mx-2 my-2" id="btn1" onClick={handleUpclick}>change to uppercase</button>
                        <button className="btn btn-primary"id="btn2" onClick={handleLoclick}>change to lowercase</button>
                        <button className="btn btn-primary mx-2 my-2"id="btn3" onClick={handleCopy} >copy text</button>
                        <button className="btn btn-primary mx-2 my-2"  id="btn4"onClick={handleClear}>clear text</button>
                <div className="containet2  my-3" style={{color:props.mode==='light'?'black':'white'}}>
                    <h2>Your Text Summary</h2>
                    <p>{text.split("").length}words and{text.length}characters</p>
                    <h3></h3>
                    <p style={{fontWeight:"bolder"}}>{text.length>0?'Now,you can preview in the next line...':'Enter something to preview'}</p>
                    <p>preview -{text}</p>

                </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}
