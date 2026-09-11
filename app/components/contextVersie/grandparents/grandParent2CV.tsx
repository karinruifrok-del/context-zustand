'use client'

import { useContext } from 'react'
import { NameValueContext } from '../../../context/NameValueContext'

export default function GrandParent2() {
  const { name, value, setName, setValue } = useContext(NameValueContext)

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
  )
}
