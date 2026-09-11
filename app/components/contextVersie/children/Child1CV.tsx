'use client'

import { UserAgeContext } from '@/app/context/UserAgeContext'
import { useContext } from 'react'

export default function Child1() {
  const { user } = useContext(UserAgeContext)
  console.log(`Child1 re-renderd, user: ${user}`)
  return <p>User: {user}</p>
}
