import { createContext, useEffect, useState } from 'react'

const NavigationContext = createContext()

function NavigationProvider({ children }) {
    // immediately looking in address bar to see what page to load
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        // listener to see browser back and forth buttons 
        window.addEventListener('popstate', handler);
        return () => { window.removeEventListener('popstate', handler) }
    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    };


    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}
export { NavigationProvider }
export default NavigationContext