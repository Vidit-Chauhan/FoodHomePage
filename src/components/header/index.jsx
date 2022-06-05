import logoIcon from "../../imageContainer/Logo with text.png";
import cartIcon from "../../imageContainer/Cart without text.png";
import searchIcon from "../../imageContainer/Search icon.png";
import PrimaryLink from "../primaryLink";
import styles from './header.module.css';
import Button from "../Button";

/* This component is used to only render the Main components of Header,
    such as - Logo, Navigation, search and Cart */
const Header = ({cartItems}) => {
    console.log('vidit',  cartItems)
    return (
        <div className={styles.headerContainer}>
            <img className={styles.logo} src={logoIcon} />
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
                <div className={styles.flyout}>
                    {cartItems.map(cartItem => (
                        <div>
                        <img src={cartItem.image}/>
                        <span>{cartItem.name}</span>
                        <span>{cartItem.price}</span>
                    </div>
                    ))}
                </div>
            </div>
            

            </div>
            
            <Button label="Log In" clickFn={()=>{}} classes=''/>
        </div>
    )
}

export default Header;