import Button from "../Button";
import styles from "./StoryTile.module.css";

/* This component is used to render StoryTile,
    this has 2 variation:
    "V1": contains Images on Right side and other details on Left
    "V2": contains Images on Left Side and other details on Right
*/

const StoryTile = ({image1, image2, title, eyebrowTitle, description, buttonLabel, buttonClickFn, variation = "V1", highlights}) => {
    return (
            <div className={styles.StoryTileWrapper}>
                <div className={styles[`detailsWrapper${variation}`]}>
                    {eyebrowTitle && <p className={styles.eyebrowTitle}>{eyebrowTitle}</p>}
                    {title && <p className={styles.title}>{title}</p>}
                    {description && <p className={styles.description}>{description}</p>}
                    {buttonLabel && <Button label={buttonLabel} clickFn={buttonClickFn} />}
                    {highlights && <div className={styles.highlightWrapper}>{highlights.map(highlight => {
                    return <div className={styles.highlight}>
                        <img src={highlight.image} />
                        <span>{highlight.title}</span>
                    </div>
                })}
                </div>}
                </div>
                <div>
                {image1 && <img src={image1} />}
                {image2 && <img src={image2} />}
                </div>
                
            </div>
        );
}

export default StoryTile;