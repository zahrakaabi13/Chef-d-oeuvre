import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import {productReducer} from "./reducers/ProductReducer"

const Reducers = combineReducers({
    productstore: productReducer
  });
const store = createStore(Reducers,applyMiddleware(thunk));
export default store;