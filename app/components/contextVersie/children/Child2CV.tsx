'use client'

import { UserAgeContext } from '@/app/context/UserAgeContext'
import { useContext } from 'react'
import { ValueDisplay } from '../../ui/StyledUI'

export default function Child2() {
  const { age } = useContext(UserAgeContext)
  console.log(`Child2 re-renderd, age: ${age}`)
  return <ValueDisplay>Currently {age} years old</ValueDisplay>
}
