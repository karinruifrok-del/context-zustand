import ParentContextVersion from "./components/contextVersie/parent/ParentContextVersion";
import ParentZustackVersion from "./components/zustackVersie/parent/ParentZustackVersion";
import { NameValueProvider } from "./context/NameValueContext";
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  min-height: 100vh;
  padding: 2rem;
`

const Column = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
`

export default function App() {
  return (
    <NameValueProvider>
          <ParentContextVersion />
    </NameValueProvider>
  )
}
