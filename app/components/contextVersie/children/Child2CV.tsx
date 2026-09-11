'use client'

import { UserAgeContext } from '@/app/context/UserAgeContext'
import { useContext } from 'react'

export default function Child2() {
  const { age } = useContext(UserAgeContext)
  console.log(`Child2 re-renderd, age: ${age}`)
  return <p>Age: {age}</p>
}
