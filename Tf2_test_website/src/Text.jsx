import styles from"./App.module.css";
import { useEffect, useState } from "react"

export const TextBase = () => { // Capitalize component names!
    const [data, SetData] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(res => SetData(res))
            .catch(err => console.error("Fetch failed:", err));
    }, [])

    // Check for empty array length instead of null
    if (data.length === 0) {
        return (
            <h1>Loading.....</h1>
        )
    }

    return (
        <>
            {data.map((product) => {
                return (
                    // 1. Add a key
                    // 2. Access a specific property like .title
                    <p key={product.id}>{product.title}</p> 
                )
            })}
        </>
    )
}