'use client'

import { useContext } from 'react'
import { UserAgeContext } from '@/app/context/UserAgeContext'
import { ValueDisplay } from '../../ui/StyledUI'

export default function Child3() {
  const { user, age } = useContext(UserAgeContext)
  console.log(`Child3 re-renderd, user: ${user}`)
  console.log(`Child3 re-renderd, age: ${age}`)
  return (
    <ValueDisplay>
      {user} is {age} years old.
    </ValueDisplay>
  )
}
