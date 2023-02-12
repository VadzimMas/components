import useNavigate from "hooks/useNavigate"

function Route({ children, path }) {
    const { currentPath } = useNavigate()
    return (
        currentPath === path ? children : null
    )
}

export default Route