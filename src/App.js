import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incNum, decNum } from "./redux/actions/index";

const App = () => {
	const myState = useSelector((state) => state.chagneTheNum);
	console.log(myState);
	const dispatch = useDispatch();

	return (
		<div className="main-container">
			<h1>this is redux </h1>
			<div className="container">
				<button onClick={dispatch(decNum())}> - </button>
				<p>{myState}</p>
				<button onClick={dispatch(incNum())}> + </button>
			</div>
		</div>
	);
};
// vk
export default App;
