import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/HelloReducer";
import counterReducer from "../a4/ReduxExamples/CountReducer/CounterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/TodosReducer";
export type TodoType = {
    id: string;
    title: string;
};

export interface LabState {
    helloReducer: {
        message: string;
    };
    counterReducer: {
        count:number;
    }
    addReducer: {
        sum: number;
    }
    todosReducer: {
        todos: TodoType[];
        todo: TodoType;
    }
}
const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer,
    },
});
export default store;
