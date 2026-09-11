'use client'

import { useContext } from 'react'
import { UserAgeContext } from '@/app/context/UserAgeContext'

export default function Child3() {
  const { user, age } = useContext(UserAgeContext)
  console.log(`Child3 re-renderd, user: ${user}`)
  console.log(`Child3 re-renderd, age: ${age}`)
  return (
    <p>
      User: {user}, Age: {age}
    </p>
  )
}
