import logoIcon from "../../imageContainer/Logo with text.png";
import cartIcon from "../../imageContainer/Cart without text.png";
import searchIcon from "../../imageContainer/Search icon.png";
import PrimaryLink from "../primaryLink";
import styles from './header.module.css';
import Button from "../Button";

/* This component is used to only render the Main components of Header,
    such as - Logo, Navigation, search and Cart */
const Header = ({cartItems, setCartItems}) => {
    const removeItemFromCart = index => {
        let itemArray = cartItems;
        itemArray.splice(index, 1);
        setCartItems([...itemArray]);
    }
    return (
        <div id="headerContainer" className={styles.headerContainer}>
            <img className={styles.logo} src={logoIcon} />
            <div>
                <PrimaryLink linkText="Home" src="#" />
                <PrimaryLink linkText="About Us" src="#" />
                <PrimaryLink linkText="Reviews" src="#" />
                <PrimaryLink linkText="Blog" src="#" />
                <PrimaryLink linkText="Contacts" src="#" />
                <div className={styles.searchAndcartWrapper}>
                <img className={styles.headerIcon} src={searchIcon} />
                <hr></hr>
                <div className={styles.cartWrapper}>
                    <img className={styles.headerIcon} src={cartIcon} />
                    {cartItems?.length > 0 && <p>{cartItems.length}</p>}
                    {cartItems?.length > 0 && <div className={styles.flyout}>
                        {cartItems.map((cartItem, index) => (
                            <div className={styles.cartItem}>
                            <img src={cartItem.image}/>
                            <span>{cartItem.name}</span>
                            <span>{cartItem.price}</span>
                            <button onClick={() => removeItemFromCart(index)}>Remove</button>
                        </div>
                        ))}
                    </div>}
                </div>
            </div>
            </div>
            
            <Button label="Log In" clickFn={()=>{}} classes=''/>
        </div>
    )
}

export default Header;