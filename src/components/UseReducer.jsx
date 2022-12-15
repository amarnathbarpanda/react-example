import { useReducer } from "react";

const initialTodos = { num: 0 };

// reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, num: state.num + action.payload }
        case "SUB":
            return { ...state, num: state.num - action.payload }
        case "MUL":
            return { ...state, num: state.num * action.payload }
        case "DIV":
            if (action.payload > 0)
                return { ...state, num: state.num / action.payload }
        default:
            return state;
    }
};

const UseReducer = () => {
    // useReducer hook
    const [count, dispatch] = useReducer(reducer, initialTodos);


    return (
        <div>
            <p>Count: {count.num}</p>
            <button onClick={() => dispatch({ type: "ADD", payload: 2 })}> Add(2)</button>
            <button onClick={() => dispatch({ type: "SUB", payload: 2 })}> Sub(2)</button>
            <button onClick={() => dispatch({ type: "MUL", payload: 2 })}> Mul(2)</button>
            <button onClick={() => dispatch({ type: "DIV", payload: 2 })}> Div(2)</button>
        </div>
    );
}


export default UseReducer;