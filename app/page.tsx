import Parent from "./components/parent";
import { NameValueProvider } from "./context/NameValueContext";

export default function App() {
  return (
    <NameValueProvider>
      <Parent />
    </NameValueProvider>
  )
}