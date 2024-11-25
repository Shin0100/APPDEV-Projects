import React, {useState} from 'react'
const randColor = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"]
export default function ColorPicker(){

    const [color, setColor] = useState('#FFFFFF')

    function getRand(){
        return Math.floor(Math.random() * randColor.length)
    }

    function getRandColor(){
        let hex = "#"
        for(let i = 0; i<9; i++){
            hex += randColor[getRand()]
        }
    return hex
    }

    function randColorChange(){
        setColor(getRandColor())
        color
    }

    function handleColorChange(event){
        setColor(event.target.value)
    }
return(
    <>
        <div className="color-picker-container">
        <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
              <p>Selected Color: {color}</p>
            </div>
            <label > Select a color </label>
            <input type="color" value = {color} onChange = {handleColorChange} />
            <button className="randomize" onClick={randColorChange}>Randomize</button>
        </div>
    </>
)

}