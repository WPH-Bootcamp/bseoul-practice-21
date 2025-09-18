// use client menandakan CSR

'use client' // ini bagian dari Client Side Renderingnya

import { useEffect, useState } from "react"

export default function ClientData() {
    // ini buat state maangement nya
    const [data, setData] = useState(null)

    // consume API disini, yang tadi kita buat
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(res => res.json()).then(setData)
    }, [])

    // ini buat response nya
    return <div>{data ? JSON.stringify(data) : 'Loading data....'}</div>
}