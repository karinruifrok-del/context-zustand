"use client"

import { createContext, useContext, useState } from "react"

export const NameValueContext = createContext({
  car: 'Ferrari',
  value: 10,
  setCar: (_car: string) => {},
  setValue: (_value: number) => {},
})


export function NameValueProvider({ children }: {children: React.ReactNode }) {
    const [car, setCar] = useState('Ferrari')
    const [value, setValue] = useState(10)

    return (
        <NameValueContext.Provider value={{ car, value, setCar, setValue }}>{children}</NameValueContext.Provider>
    )
}