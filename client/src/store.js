import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import {productReducer} from "./reducers/ProductReducer"
import {contactReducer} from "./reducers/ContactReducer"

const Reducers = combineReducers({
    productstore: productReducer,
    contactstore: contactReducer
  });
const store = createStore(Reducers,applyMiddleware(thunk));
export default store;