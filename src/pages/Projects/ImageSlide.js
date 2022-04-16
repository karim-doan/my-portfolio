
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

import styles from './Projects.module.scss'

export default function ImageSlide(images) {

    const [slide, setSlide] = useState(true)
    const imageData = images.images

    useEffect(() => {
        const SlideShowLenght = imageData.length
        if (SlideShowLenght === 1) setSlide(false)
 
        
    }, [])
    
    $(`.${clsx(styles.carousel)}`).on('click', () => $(this).attr('id')) 

    return (
        <>
            {imageData.map(image =>
                <>
                    <img src={image} className={clsx(styles.imgItem)} alt='item' />
                    {slide &&
                        ( 
                            <div className={clsx(styles.carouselContainer)}>
                                <div id='arrowLeft' className={clsx(styles.carousel)}>
                                    <FontAwesomeIcon
                                        id='ChevronLeft'
                                        className={clsx(styles.arrowImage)}
                                        icon={faChevronLeft} />
                                </div>
                                <div id='arrowRight' className={clsx(styles.carousel)}>
                                    <FontAwesomeIcon
                                        id='ChevronRight'
                                        className={clsx(styles.arrowImage)}
                                        icon={faChevronRight} />
                                </div>
                            </div>
                        )
                    }
                </>

            )}
        </>
    )
}