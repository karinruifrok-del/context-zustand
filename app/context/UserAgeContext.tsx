'use client'

import { createContext, useState } from 'react'
import { UserAgeType } from '../types/userAgeType'

export const UserAgeContext = createContext<UserAgeType>({
  user: 'Karin',
  age: 22,
  setUser: (_user: string) => {},
  setAge: (_age: number) => {},
})

export function UserAgeProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState('Karin')
  const [age, setAge] = useState(22)

  return (
    <UserAgeContext.Provider value={{ user, age, setUser, setAge }}>
      {children}
    </UserAgeContext.Provider>
  )
}
