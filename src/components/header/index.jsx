import logoIcon from "../../imageContainer/Logo with text.png";
import cartIcon from "../../imageContainer/Cart without text.png";
import searchIcon from "../../imageContainer/Search icon.png";
import PrimaryLink from "../primaryLink";
import styles from './header.module.css';
import Button from "../Button";

/* This component is used to only render the Main components of Header,
    such as - Logo, Navigation, search and Cart */
const Header = () => {
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
            <img className={styles.headerIcon} src={cartIcon} />
            </div>
            
            <Button label="Log In" clickFn={()=>{}} classes=''/>
        </div>
    )
}

export default Header;