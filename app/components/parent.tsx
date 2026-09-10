import GrandParent1 from "./grandparents/grandParent1";
import GrandParent2 from "./grandparents/grandParent2";

export default function Parent() {
  return (
    <div>
      <h2>Parent</h2>
      <GrandParent1 />
      <GrandParent2 />
    </div>
  )
}
