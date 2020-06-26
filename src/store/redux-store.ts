import {createStore} from "redux";
import hiredReducer from "./hired-reducer";

type RootReducerType = typeof hiredReducer
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch

let store = createStore(hiredReducer)

export default store;