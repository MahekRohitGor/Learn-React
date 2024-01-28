import React from "react";

// const TodoItem = () =>{
//     return(
//         <li className="todo-item">
//         <span>
//         <input type="checkbox" name="" id="" />
//         <span className="todo-item-text">Eat</span>
//         </span>
//         <p>...</p>
//         </li>

//     );
// };

const TodoItem = (props) =>{
    return(
        <li className="todo-item">
        <span>
        {props.completed ? <></> : <input type="checkbox" name="" id="" />}
        <span className="todo-item-text">{props.text}</span>
        </span>
        <p>...</p>
        </li>

    );
};
export default TodoItem;