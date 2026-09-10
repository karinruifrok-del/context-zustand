import Child1 from "../children/Child1";
import Child2 from "../children/Child2";
import Child3 from "../children/Child3";

export default function GrandParent1() {
    return (
    <div><h3>Grandparent 1</h3>
    <Child1 />
    <Child2 />
    <Child3 />
    </div>
    )
}