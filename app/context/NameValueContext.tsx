'use client'

import { createContext, useState } from 'react'
import { NameValueType } from '../types/nameValueType'

export const NameValueContext = createContext<NameValueType>({
  name: 'Bananas',
  value: 10,
  setName: (_name: string) => {},
  setValue: (_value: number) => {},
})

export function NameValueProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState('Bananas')
  const [value, setValue] = useState(10)

  return (
    <NameValueContext.Provider value={{ name, value, setName, setValue }}>
      {children}
    </NameValueContext.Provider>
  )
}
