import { useContext } from 'react'
import NavigationContext from '../context/navigation'

const useNavigate = () => {
    return useContext(NavigationContext)
}

export default useNavigate