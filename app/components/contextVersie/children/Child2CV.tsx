'use client'

import { NameValueContext } from '@/app/context/NameValueContext'
import { useContext } from 'react'

export default function Child2() {
  const { value } = useContext(NameValueContext)
  console.log(`Child2 re-renderd, value: ${value}`)
  return <p>Value: {value}</p>
}
