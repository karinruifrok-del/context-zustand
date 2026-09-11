'use client'

import { NameValueContext } from '@/app/context/NameValueContext'
import { useContext } from 'react'

export default function Child1() {
  const { name } = useContext(NameValueContext)
  console.log(`Child1 re-renderd, name: ${name}`)
  return <p>Name: {name}</p>
}
