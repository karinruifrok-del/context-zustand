'use client'

import { UserAgeContext } from '@/app/context/UserAgeContext'
import { useContext } from 'react'
import { ValueDisplay } from '../../ui/StyledUI'

export default function Child1() {
  const { user } = useContext(UserAgeContext)
  console.log(`Child1 re-renderd, user: ${user}`)
  return <ValueDisplay>Meet {user}</ValueDisplay>
}
