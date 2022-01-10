import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
const composedEnhancer = compose(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancer);

export default store;
