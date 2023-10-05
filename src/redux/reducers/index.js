import { combineReducers } from "redux";
import chagneTheNum from "./upDown";

const rootReducer = combineReducers({
	chagneTheNum: chagneTheNum,
});

export default rootReducer;
