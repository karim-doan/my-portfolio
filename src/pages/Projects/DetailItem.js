
import $ from 'jquery'
import clsx from 'clsx'
import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import styles from './Projects.module.scss'
import { projects } from '../../Data/index.js'
import { useStore, actions } from '../../stores'
import ImageSlide from './ImageSlide.js'

function DetailItem({ itemIndex }) {
    const [state, dispatch] = useStore()
    const [show, setShow] = useState(false)
    const imgRef = useRef()
    let props = ''

    const handleBtnClose = () => {
        dispatch(actions.resetItem())
    }

    useEffect(() => {
        const btnClose = `.${clsx(styles.btnClose)}`
        const item = `.${clsx(styles.detailItem)}`
        const container = `.${clsx(styles.detailContainer)}`
        const tech = `.${clsx(styles.usedTech)}`

        $(btnClose).on('click', handleBtnClose)
        $(item).on('click', function (e) {
            e.stopPropagation();
        });
        $(container).on('click', handleBtnClose)
        $(tech).on('click', handleBtnClose)

    }, [])

    useEffect(() => {
        setTimeout(() => {
            $(`.${clsx(styles.imgTech)}`).addClass(`${clsx(styles.rotate)}`) 
            $(`.${clsx(styles.imgTechContainer)}`).addClass(`${clsx(styles.imgEffectAnimation)}`) 
        }, 500)
    })

    return (
        projects.map(project => {
            if (project.id === itemIndex) {
                return (
                    < div
                        className={clsx(styles.detailContainer)}
                        key={itemIndex}
                    >
                        <div className={clsx(styles.detailItem)}>
                            <div className={clsx(styles.imgIllustration)}>
                                <ImageSlide images={project.image.illustration} />
                            </div>
                            <div className={clsx(styles.content)}>
                                <div className={clsx(styles.title)}>
                                    {project.name}
                                </div>
                                <div className={clsx(styles.briefDescription)}>
                                    {project.briefDescription}
                                </div>
                                <div className={clsx(styles.underlineBar)}></div>
                                <div className={clsx(styles.description)}>
                                    {project.description}
                                </div>
                                <div className={clsx(styles.toolbar)}>
                                    <a
                                        href={project.urlLive}
                                        target='_blank'
                                        className={clsx(styles.btnView, styles.btn)}
                                        onClick={() => console.log('View')}
                                    >
                                        <div>
                                            <FontAwesomeIcon
                                                className={clsx(styles.iconToolbar)}
                                                icon={faArrowUpRightFromSquare}
                                                style={{ height: '19px', paddingRight: '5px', }}
                                            />
                                            View Website
                                        </div>
                                    </a>
                                    <a
                                        href={project.urlCode}
                                        target='_blank'
                                        className={clsx(styles.btnView, styles.btn)}
                                        onClick={() => console.log('Source Code')}
                                    >
                                        <div>
                                            <FontAwesomeIcon
                                                className={clsx(styles.iconToolbar)}
                                                icon={faArrowUpRightFromSquare}
                                                style={{ height: '19px', paddingRight: '5px', }}
                                            />
                                            View Source Code
                                        </div>
                                    </a>
                                    <div
                                        className={clsx(styles.btnClose, styles.btn)}
                                    >
                                        <div>
                                            <FontAwesomeIcon
                                                className={clsx(styles.iconToolbar, styles.btnClose)}
                                                icon={faX}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(styles.usedTech)}>
                                <div className={clsx(styles.usedTechEffect)}>

                                    {project.usedTech
                                        .filter(tech =>
                                            tech.name === "ReactJS" || "Jquery" || "NodeJS" || "Github" || "Boostrap")
                                        .map((obj, index) => (
                                            <div
                                                className={clsx(styles.imgTechContainer)}
                                                key={index}
                                            >
                                                <img
                                                    className={clsx(styles.imgTech)}
                                                    src={obj.img}
                                                    alt={obj.name}
                                                    title={obj.name}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </ div>
                )
            }
        })
    )
}

export default DetailItem