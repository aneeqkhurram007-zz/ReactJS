import { createStore } from "redux";
import rootReducer from "./reducer/index";

// const store=createStore(rootReducer,)
const store = createStore(
    rootReducer, /* preloadedState, */
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;