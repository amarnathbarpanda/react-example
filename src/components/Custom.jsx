import { useState } from "react";

const useCustomeCounter = () =>{
    const [count, setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count+1);
    }

    return [
        count,
        handleIncrement
    ]
} 


const useForm = () =>{
    const [value, setValue] = useState('');

    const handleChange = (e) =>{
        setValue(e.target.value);
    }

    return {
        value, handleChange
    }


}

export  {useCustomeCounter, useForm};