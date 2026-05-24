import styles from"./App.module.css";
import { useEffect, useState } from "react"
import { CardsDetail } from "./Cards"

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
    let count = 0
    const increment=()=>{
        count=count+1;
    }

    return (
        <div className={styles.gridbox}>
            {data.slice(0,3).map((product) => {
                return (
                    <CardsDetail key={product.id} product={product}/>
                )
            })}
        </div>
    )
}