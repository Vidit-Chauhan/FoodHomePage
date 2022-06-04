import styles from './PrimaryLink.module.css';

//Link from react router to be used
const PrimaryLink = ({linkText, src}) => {
    return <a className={styles.anchorLink} href={src}>{linkText}</a>
}

export default PrimaryLink;