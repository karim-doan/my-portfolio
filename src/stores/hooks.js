
import { useContext } from 'react'
import {StoreContext} from '../stores'

export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext)
    return [state, dispatch]
}

