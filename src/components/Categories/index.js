import { useState } from 'react';
import styles from './Categories.module.css';


/*
This component is used to render different food categories in a list,
on each categories, we are showing multiple items with their name, price and
a button to add them to cart.
*/

const Categories = ({data, setCartItems}) => {
    const [items, setItems] = useState(data?.categories[0]?.items);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const onItemClick = (category, index) => {
        setSelectedIndex(index);
        setItems(category.items);
    }

    const onAddToCartButtonClick = item => {
        setCartItems(prevState =>
            [...prevState, item]
        );
    }

    const categoryListRenderer = () => {
        return data?.categories?.map((category, index) => (
            <div onClick={() => onItemClick(category, index)} selected={index === selectedIndex} className={`${styles.CategoryItem} ${index === selectedIndex ? styles.selected : ''}`}>
                <img className={styles.categoryImage} src={category.image} />
                <span>{category.title}</span>
            </div>
        ))
    }
    return (
    <div className={styles.categoryWrapper}>
        <div>
            <p className={styles.eyebrowTitle}>{data.eyebrowTitle}</p>
            <p className={styles.title}>{data.title}</p>
        </div>
        <div className={styles.categoryContentWrapper}>
        <div className={styles.categoryListWrapper}>
            {categoryListRenderer()}
        </div >
        {items && <div className={styles.imageWrapper}>
            {items.map((item) => (
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