import { Card } from '../../ui/StyledUI'
import Child1 from '../children/Child1ZV'
import Child2 from '../children/Child2ZV'
import Child3 from '../children/Child3ZV'

export default function Grandparent1() {
  return (
    <Card>
      <h3>Display</h3>
      <Child1 />
      <Child2 />
      <Child3 />
    </Card>
  )
}
