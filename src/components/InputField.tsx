import React, { useRef } from "react";
import './styles.css';

interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent )=> void;
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) =>{
    // to make outer-shadow disapper when press ENTER after input-field 
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form action="" className="input" 
            onSubmit={(e)=> {
                handleAdd(e);
                //HTMLElement.blur() : 現在の要素からキーボードフォーカスを取り除く **https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/blur
                inputRef.current?.blur()
            }}
            >
            <input className="input__box" type="text" placeholder="Enter a task"
                value={todo} onChange={(e)=>setTodo(e.target.value)}
                ref={inputRef}
            />
            <button className="input_submit" type="submit" >Go</button>
        </form>
    )
}

export default InputField;