import React from "react";
import ClickEvent from "./UserEvent/ClickEvent";
import PassingDataOnEvent from "./UserEvent/PassingDataOnEvent";
import PassingFunctions from "./UserEvent/PassingFunctions";
import EventObject from "./UserEvent/EventObject";
import Counter from "./ComponentState/Counter";
import BooleanStateVariables from "./ComponentState/BooleanStateVariables";
import DateStateVariable from "./ComponentState/DateStateVariable";
import StringStateVariables from "./ComponentState/StringStateVariables";
import ObjectStateVariable from "./ComponentState/ObjectStateVariable";
import ArrayStateVariable from "./ComponentState/ArrayStateVariable";
import ParentStateComponent from "./ComponentState/ParentStateComponent";
import HelloRedux from "./ReduxExamples/HelloRedux";
import CounterRedux from "./ReduxExamples/CountReducer";
import AddRedux from "./ReduxExamples/AddRedux";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
    function sayHello() {
        alert("hello")
    }

    return(
        <div className={"container"}>
            <h1>Assignment 4</h1>
            <TodoList/>
            <AddRedux/>
            <CounterRedux/>
            <HelloRedux/>
            <ParentStateComponent/>
            <ArrayStateVariable/>
            <ObjectStateVariable/>
            <DateStateVariable/>
            <StringStateVariables/>
            <BooleanStateVariables/>
            <Counter/>
            <EventObject/>
            <PassingFunctions theFunction={sayHello}/>
            <PassingDataOnEvent/>
            <ClickEvent/>
        </div>
    );
};
export default Assignment4;
