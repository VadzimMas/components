import useNavigate from 'hooks/useNavigate'
import classNames from 'classnames'
import React from 'react'


function Link({ to, children, className, activeClassName, ...rest }) {

    const { navigate, currentPath } = useNavigate()

    let classes = classNames(
        className,
        'text-blue-500',
        currentPath === to && activeClassName
    )

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return
        }
        event.preventDefault()
        navigate(to)
    }

    return (
        <a className={classes} href={to} onClick={handleClick} {...rest}>{children}</a>
    )
}

export default Link