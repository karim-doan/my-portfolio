
import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import styles from './Projects.module.scss'

export default function ImageSlide(images) {

    const [slide, setSlide] = useState(true)
    const [currentSlide, setCurrentSlide] = useState(1)
    const imageData = images.images
    const imgContainer = useRef() 
    
    useEffect(() => {
        const ImgContainer = imgContainer.current

        const SlideShowLenght = imageData.length
        const translateX = (i) => {
            ImgContainer.style.transform = `translateX(${i * -1}00%)`
        } 
        const handleScroll = (target) => {
            if (target === 'arrowRight') {
                if (currentSlide === SlideShowLenght) {

                    translateX(0)
                    return setCurrentSlide(1)
                }
                if (currentSlide < SlideShowLenght) {

                    setCurrentSlide(currentSlide + 1)
                    translateX(currentSlide)
                }
            }
            if (target === 'arrowLeft') {

                if (currentSlide === 1) {
                    translateX(SlideShowLenght - 1)
                    setCurrentSlide(SlideShowLenght)
                }
                if (currentSlide > 1 && currentSlide <= SlideShowLenght) {
                    setCurrentSlide(prev => prev - 1 )
                    translateX(currentSlide - 2)
                }

            }
        }

        if (SlideShowLenght > 1) {

            $(`.${clsx(styles.carousel)}`).unbind().on('click', (e) => {
                const target = e.currentTarget.getAttribute('id')
                handleScroll(target)
            })

        }
        else {
            setSlide(false)
        }


    })


    return (
        <>
            <div ref={imgContainer} className={clsx(styles.imgContainer)}>
                {
                    imageData.map((image, index) =>
                        <img
                            key={index}
                            src={image}
                            className={clsx(styles.imgItem)}
                            alt={`image-${index}`}
                        />
                    )
                }
            </div>
            {
                slide && (
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
    )
}