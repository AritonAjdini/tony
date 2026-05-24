import { useParams, useLocation } from "react-router-dom"
import styles from "./CardDescript.module.css"

export const CardDesc = () => {

    const {id} = useParams();
    const location = useLocation();
    const { description, images } = location.state || {};

    return(
       <div className={styles.gridbox}>
            <h1>Product ID: {id} </h1> 
            <div className={styles.content}>
                <p>Website is under construction,</p> 
                <p>This is a test for a new digital inventory documentation scheme.</p>
                
                <hr />

                <p><strong>Description:</strong></p>
                <p>{description || "No description available."}</p>

                {/* Use {} for the variable, not "" */}
                {images && images[0] && (
                    <img src={images[0]} alt="Product" className={styles.inventoryImage} />
                )}
            </div> 
        </div>
    );
}