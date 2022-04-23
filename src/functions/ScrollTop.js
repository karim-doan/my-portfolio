
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom' 

// handleGotop
const ScrollTop = () => {

    const [heightScreen, setHeightScreen] = useState(1000)
    const { pathname } = useLocation()

    useEffect(() => { 
        setHeightScreen(window.innerHeight)
    }, [heightScreen])

    useEffect(() => {
        const goTop = () => {
            setTimeout(() => {
                window.scrollTo(0, heightScreen)
            },0)
        }

        return () => {
            goTop() 
        }

    }, [pathname]) 
    
    return
}

export { ScrollTop }
