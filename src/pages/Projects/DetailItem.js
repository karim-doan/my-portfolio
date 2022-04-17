
import { useEffect } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './Projects.module.scss'
import { projects } from '../../Data/index.js'
import { useStore, actions } from '../../stores'
import ImageSlide from './ImageSlide.js'
import $ from 'jquery'

function DetailItem({ itemIndex }) {
    console.log('re-render')
    const [state, dispatch] = useStore()
    let props = ''

    const handleBtnClose = () => {
        dispatch(actions.resetItem())
    }

    useEffect(() => {
        const btnClose = `.${clsx(styles.btnClose)}`
        const item = `.${clsx(styles.detailItem)}`
        const container = `.${clsx(styles.detailContainer)}`

        $(btnClose).on('click', handleBtnClose)
        $(item).on('click', function (e) {
            e.stopPropagation();
        });
        $(container).on('click', handleBtnClose)

    }, [])

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
                                {/* {project.image.illustration.map(image =>
                            )} */}

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

                        </div>
                    </ div>
                )
            }
        })
    )
}

export default DetailItem