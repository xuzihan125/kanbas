import PathParameters from "./routing/PathParameters";
import JavaScript from "./JavaScript";
import Classes from "./css/Classes";
import  Styles from "./css/Styles"
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./child/Highlight";
import Add from "./child/Add";
import TodoList from "./todos/TodoList";

function Assignment3() {
    return (
        <div className={"container"}>
            <h1>Assignment 3</h1>
            <TodoList/>
            <Add a={1} b={2}/>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>
        </div>
    )
}
export default Assignment3
