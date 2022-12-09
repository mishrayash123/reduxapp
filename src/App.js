import React from "react";
import "./App.css"
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"

const App = () => {
const myState = useSelector((state) => state.Changethenumber);
const dispatch = useDispatch();

    return (
        <div>
            <h1>Increament and decreament counter using redux</h1>
            <input name="quantity" type="text" value={myState}></input>
            <button onClick={ () => dispatch(incNumber())}>+</button>
            <button  onClick={() => dispatch(decNumber())}>-</button>
        </div>
    )
}

export default App;
