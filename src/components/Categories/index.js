import { useState } from 'react';
import styles from './Categories.module.css';


/*
This component is used to render different food categories in a list,
on each categories, we are showing multiple items with their name, price and
a button to add them to cart.
*/

const Categories = ({data, setCartItems}) => {
    const [items, setItems] = useState([]);

    const onItemClick = category => {
        setItems(category.items);
    }

    const onAddToCartButtonClick = item => {
        setCartItems(prevState =>
            [...prevState, item]
        );
    }

    const categoryListRenderer = () => {
        return data?.categories?.map(category => (
            <div onClick={() => onItemClick(category)} className={styles.CategoryItem}>
                <img className={styles.categoryImage} src={category.image} />
                <span>{category.title}</span>
            </div>
        ))
    }
    return (
    <div className={styles.categoryWrapper}>
        <div>
            <p className="eyebrowTitle">{data.eyebrowTitle}</p>
            <p className={styles.title}>{data.title}</p>
        </div>
        <div className={styles.categoryContentWrapper}>
        <div className={styles.categoryListWrapper}>
            {categoryListRenderer()}
        </div >
        {items && <div className={styles.imageWrapper}>
            {items.map(item => (
                    <div className={styles.itemWrapper}>
                    <img src={item.image} />
                    <div>
                        <p>{item.name}</p>
                        <p>{`$ ${item.price}`}</p>
                        <button onClick={() => onAddToCartButtonClick(item)}>Add to Cart</button>
                    </div>
                    </div>
                )
            )}
        </div>}
        </div>
        
    </div>
    );
}

export default Categories;