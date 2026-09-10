import GrandParent1 from "../grandparents/grandParent1";
import GrandParent2 from "../grandparents/grandParent2";

export default function ParentContextVersion() {
  return (
    <div>
      <h1>Context Version (parent)</h1>
      <GrandParent1 />
      <GrandParent2 />
    </div>
  )
}
