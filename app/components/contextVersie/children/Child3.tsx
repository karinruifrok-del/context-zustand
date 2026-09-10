"use client"

import { useContext } from "react"
import { NameValueContext } from "@/app/context/NameValueContext"

export default function Child3() {
    const { car, value } = useContext(NameValueContext)
    console.log(`Child3 re-renderd, value: ${value}, car: ${car}`)
    return <p>Value: {value}, Car: {car}</p>
}