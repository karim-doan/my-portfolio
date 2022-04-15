
import clsx from "clsx"
import styles from "./Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>

            <div className={clsx(styles.Footer, '')}>
                <div className={clsx(styles.TopFooterContainer)}>
                    <div className={clsx(styles.TopFooter)}></div>
                </div>
                <div className={clsx(styles.footerContainer)}>
                    <div className={clsx(styles.iconContainer, clsx(styles.goTopContainer),'justify-content-center')}>
                        <a href='#' className={clsx(styles.iconContact, styles.goTop)}>
                            <FontAwesomeIcon className={clsx(styles.icon)} icon={faChevronUp} />
                        </a>
                    </div>
                    <div className={clsx(styles.footerContent)}>
                        <div className={clsx(styles.iconContainer, 'justify-content-center')}>
                            <div className={clsx(styles.iconContact, 'justify-content-center')}>
                                <FontAwesomeIcon className={clsx(styles.icon)} icon={faFacebook} />
                            </div>
                            <div className={clsx(styles.iconContact, 'justify-content-center')}>
                                <FontAwesomeIcon className={clsx(styles.icon)} icon={faInstagram} />
                            </div>
                            <div className={clsx(styles.iconContact, 'justify-content-center')}>
                                <FontAwesomeIcon className={clsx(styles.icon)} icon={faCopyright} />
                            </div>
                        </div>
                        <div className={clsx(styles.copyRightContainer, 'justify-content-center')}>
                            Doan Hoang Kim
                            <FontAwesomeIcon className={clsx(styles.icon, styles.iconCopyRight)} icon={faCopyright} />
                            2022
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer