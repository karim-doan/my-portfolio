
import { useEffect, useRef } from 'react'
import $ from 'jquery'
import styles from './Projects.module.scss'
import clsx from 'clsx'
import { useStore, actions } from '../../stores'

function GalleryItem({
    id,
    name,
    type,
    framework,
    responsive,
    image,
    typeItem,
    show = true,
}) {
    const [state, dispatch] = useStore()
    const handleBtn = () => {
        dispatch(actions.addItem(id))
    }
    const galleryItem = useRef(null)

    useEffect(() => {
        const item = galleryItem.current
        const itemImage = item.querySelector(`.${clsx(styles.galleryItemContainer)}`)
        const label = item.querySelector(`.${clsx(styles.labelContainer)}`)
        const animation = clsx(styles.hide)

        const hpp = () => {

            if (typeItem === 'All') {
                // animation &&
                return item

            }
            else {

                if (type !== typeItem) {

                    itemImage.classList.add(animation)
                    label && label.classList.add(animation)
                    setTimeout(() => {
                        item.style.display = 'none'
                    }, 501)
                    return item
                }
                // console.log([type,typeItem], )
            }
        }

        hpp()
        return () => {
            label && label.classList.remove(animation)
            itemImage.classList.remove(animation)
            item.style.display = 'flex'
        }

    }, [typeItem])

    return (
        <div
            ref={galleryItem}
            id={type}
            className={clsx(styles.galleryItemOutline)}>
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
            </div>

            {responsive &&
                <div className={clsx(styles.labelContainer)}>
                    <div className={clsx(styles.label)}>
                        Responsive
                    </div>
                </div>
            }
        </div>
    )
}

export default GalleryItem