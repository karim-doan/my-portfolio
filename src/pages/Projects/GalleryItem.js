import { useLayoutEffect } from 'react'
import styles from './Projects.module.scss'
import clsx from 'clsx'
import { useStore, actions } from '../../stores'
import $ from 'jquery'

function GalleryItem({
    id,
    name,
    type: typeItem,
    framework,
    responsive,
    image,
    show = true,
}) {

    const [state, dispatch] = useStore()
    const handleBtn = () => {
        dispatch(actions.addItem(id))
    }
 

    return (
        <div className={clsx(styles.galleryItemOutline)}>
            <div className={clsx(styles.galleryItemContainer)}>

                <div
                    key={id}
                    id={id}
                    className={clsx(styles.galleryItem, { [styles.galleryItemShow]: show })}
                    style={{ backgroundImage: `url(${image.thumbnail})` }}
                >
                    <div className={clsx(styles.cardContainer)}>
                        <div className={clsx(styles.galleryTitle)}>
                            <div className={clsx(styles.galleryName)}>
                                {name}
                            </div>
                            <div className={clsx(styles.galleryType)}>
                                {framework}
                            </div>
                        </div>
                        <div
                            onClick={() => handleBtn()}
                            className={clsx(styles.btnGallery)}
                        >
                            Learn more
                        </div>
                    </div>
                </div>

                {responsive &&
                    <div className={clsx(styles.labelContainer)}>
                        <div className={clsx(styles.label)}>
                            Responsive
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default GalleryItem