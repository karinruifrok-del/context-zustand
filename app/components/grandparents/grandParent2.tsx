"use client"

import { useContext } from "react"
import { NameValueContext } from "../../context/NameValueContext"

export default function GrandParent2() {
    const { car, value, setCar, setValue } = useContext(NameValueContext);

    return <div>
        <h3>Grandparent 2</h3>
        <label>
            car: <input value={car} type="string"  onChange={(e) => setCar(e.target.value)}/>
        </label>
        <br/>
        <label>
            value: <input value={value} type="number" onChange={(e) => setValue(Number(e.target.value))}/>
        </label>
    </div>
}