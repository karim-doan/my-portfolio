import { useEffect, useState } from 'react';
import $ from 'jquery'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import styles from './Header.module.scss';

function Header() {

    const [heightScreen, setHeightScreen] = useState(1000)
    const [inBlock, setInBlock] = useState(false)
    const [navActive, setNavActive] = useState(false)
    const [projectActive, setProjectActive] = useState(false)
    const [aboutActive, setAboutActive] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        setHeightScreen(window.innerHeight)
    }, [heightScreen])
    
    // handleGotop
    useEffect(() => {

        const goto = () => {
            window.scrollTo(0, heightScreen)
        }

        return () => {
            goto()
        }
 
    }, [pathname])

    //handleMouseEnter handleMouseLeave btn-see__more, **hover event
    useEffect(() => {

        const btnSeeMore = $(`.${clsx(styles.btnSeeMore)}`)
        const arrowRight = $('#arrow-right')

        const handleMouseEnter = () => {
            arrowRight.addClass(clsx(styles.rotate))
            return setInBlock(true)
        }

        const handleMouseLeave = () => {

            arrowRight.addClass(clsx(styles.release))
            arrowRight.removeClass(clsx(styles.rotate))
            setTimeout(() => {
                arrowRight.removeClass(clsx(styles.release))
            }, 200);

            return setInBlock(false)
        }

        btnSeeMore
            .on('mouseenter', () => handleMouseEnter())
            .on('mouseleave', () => handleMouseLeave())

    }, [inBlock])


    useEffect(() => {
        const handleScroll = () => {
            const NavBarTag = heightScreen + 50

            if (window.scrollY >= NavBarTag) {
                setNavActive(true)
            }
            else if (window.scrollY < NavBarTag) {
                setNavActive(false)
            }
            if (window.scrollY >= 300) {
                setProjectActive(true)
            }
            if (window.scrollY >= 1200) {
                setAboutActive(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    //handle display navbar
    useEffect(() => {

        const isAnimation = clsx(styles.navListsAnimated)

        if (navActive) {
            $('#navbar-lists').addClass('hide')
            setTimeout(() => {
                $('#navbar-lists').removeClass('hide')
                $('#navbar-lists').addClass(isAnimation)
            }, 100);
        }
        else {
            $('#navbar-lists').removeClass(isAnimation)

        }
    }, [navActive])


    useEffect(() => {
        $('#Pj-titleContainer').hide()
        $('#Pj-titleContent').hide()

        if (projectActive) {

            $('#Pj-titleContainer').show()

            setTimeout(() => {
                $('#Pj-titleContent').show()
            }, 300);
        }
    }, [projectActive])

    useEffect(() => {
        $('#Ab-titleContainer').hide()
        $('#Ab-titleContent').hide()
        if (aboutActive) {
            $('#Ab-titleContainer').show()


            setTimeout(() => {
                $('#Ab-titleContent').show()
            }, 300);
        }
    }, [aboutActive])

    return (
        <>
            <div className={clsx(styles.Home, 'format-center')}>
                <div className={clsx(styles.homeBackground)}></div>
                <div className={clsx(styles.btnContainer, 'format-center')}>
                    <div>
                        <p className={clsx(styles.text)} >
                            Hello, I'm
                            <b className={clsx(styles.name)}>Kim</b>.
                        </p>
                        <p className={clsx(styles.text)}>
                            I'm a web developer.
                        </p>
                        <a href='#body-content' className='format-center a-prevent-default'>
                            <div className={clsx(styles.btnSeeMore, 'd-flex')}>
                                <p>See more</p>
                                <FontAwesomeIcon id='arrow-right' icon={faArrowRight} style={{ height: '100%' }} />
                            </div>
                        </a>
                    </div>
                </div>
            </div >

            <nav id='navbar-lists' className={clsx(styles.navbarLists, 'd-flex')}>
                <ul className="grid justify-content-between " style={{ width: '1200px' }} >
                    <li >
                        <Link className={clsx(styles.headerPageLink, 'a-prevent-default')} to='/myprofile'>Home</Link>
                    </li>
                    <li >
                        <Link className={clsx(styles.headerPageLink, 'a-prevent-default')} to='/myprofile/About'>About</Link>
                        <Link className={clsx(styles.headerPageLink, 'a-prevent-default')} to='/myprofile/Projects'>Projects</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Header
