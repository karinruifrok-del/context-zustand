import Child1 from '../children/Child1CV'
import Child2 from '../children/Child2CV'
import Child3 from '../children/Child3CV'

export default function GrandParent1() {
  return (
    <div>
      <h3>Grandparent 1</h3>
      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  )
}
