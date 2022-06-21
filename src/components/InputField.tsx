import React from "react";
import './styles.css';

const InputField = () =>{
    return (
        <form action="" className="input">
            <input className="input__box" type="text" placeholder="Enter a task" />
            <button className="input_submit" type="submit" >Go</button>
        </form>
    )
}

export default InputField;