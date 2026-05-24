import { NavLink } from "react-router-dom";
import styles from './CardsDetail.module.css';
import { CardDesc } from "./CardsDescription";

export const CardsDetail=({product})=>{
    const { title, price, description, images, category } = product;
return(
  <div className={styles.cardContainer}>
    <div className={styles.imageWrapper}>
      <img 
        src={images[0]} 
        alt={title} 
        className={styles.productImage}
      />
      <div className={styles.categoryBadge}>
        <span className={styles.categoryText}> 
          {category.name.split('pruebacat')[0] || "New Arrival"}
        </span>
      </div>
    </div>

    <div className={styles.contentArea}>
      <div className={styles.headerRow}>
        <h2 className={styles.cardTitle}>
          {title}
        </h2>
        <span className={styles.priceTag}>
          ${price}
        </span>
      </div>

      <p className={styles.descriptionText}>
        {description}
      </p>

      <NavLink to={`/Text/${product.id}`} className={styles.detailLink} state={{ description: product.description, images: product.images }}>          
        <div >
          <span>Description for {product.title}</span>
        </div>
      </NavLink>
    </div>
  </div>
)
}
export default CardsDetail;