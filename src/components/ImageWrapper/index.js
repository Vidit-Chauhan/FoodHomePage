import styles from './ImageWrapper.module.css';

/*
    This component is used to render 1 or more images coming as Array of object/s
*/
const ImageWrapper = ({data}) => {
    const imageCount = data.length;
    return <div className={styles.ImageWrapper}>
        {data.map(obj => 
            <img style={{ width: `${96 / imageCount}%`}} src={obj.imageFile}/>
        )};
        </div>
}

export default ImageWrapper;