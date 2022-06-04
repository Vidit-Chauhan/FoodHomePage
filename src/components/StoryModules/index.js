import styles from './StoryModules.module.css'

/* 
This component is used for rendering storyModules
*/
const StoryModules = ({data}) => {
    return (
        <div className={styles.StoryModuleWrapper}>
            {data.map(module =>
                <div className={styles.StoryModuleTile}>
                    <img src={module.image}/>
                    <p>{module.title}</p>
                    <p>{module.subTitle}</p>
                </div>
            )}
        </div>
    )
}

export default StoryModules;