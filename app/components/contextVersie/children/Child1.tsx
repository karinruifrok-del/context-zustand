"use client"

import { NameValueContext } from "@/app/context/NameValueContext"
import { useContext } from "react"

export default function Child1() {
    const {car} = useContext(NameValueContext)
    console.log(`Child1 re-renderd, car: ${car}`)
    return <p>Car: {car}</p>
}