"use client"

import { useNameValueStore } from "@/app/store/useNameValueStore"

export default function Grandparent2() {
  const name = useNameValueStore((state) => state.name)
  const value = useNameValueStore((state) => state.value)
  const setName = useNameValueStore((state) => state.setName)
  const setValue = useNameValueStore((state) => state.setValue)

return (
    <div>
      <h3>Grandparent 2</h3>
      <label>
        Name:{' '}
        <input
          value={name}
          type="string"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Value:{' '}
        <input
          value={value}
          type="number"
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </label>
    </div>
  )}
