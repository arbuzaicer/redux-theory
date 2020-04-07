import {combineReducers, createStore} from "redux";
import homeReducer from "./reducers/homeReducer";
import contactsReducer from "./reducers/contactsReducer";
import aboutReducer from "./reducers/aboutReducer";

const reducers = combineReducers({
    home: homeReducer,
    contacts: contactsReducer,
    about: aboutReducer
});

const store = createStore(reducers);
window.state = store.getState();

export default store;