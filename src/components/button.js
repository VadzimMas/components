
import className from 'classnames'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    const classes = className(rest.className,
        'flex items-center text-[clamp(16px,3vw,40px)] px-[2em] py-[0.5em] m-1 border-solid border-2',
        {
            'border-blue-500 bg-blue-500 text-white': primary,
            'border-gray-500 bg-gray-500 text-white': secondary,
            'border-green-500 bg-green-500 text-white': success,
            'border-yellow-500 bg-yellow-500 text-white': warning,
            'border-red-500 bg-red-500 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-500': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-500': outline && warning,
            'text-red-500': outline && danger,
        })

    return (
        <button {...rest} className={classes}>{children}</button>
    )
}

Button.propTypes = {
    checkConflictingProps: ({ primary, secondary, success, warning, danger }) => {

        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger)

        if (count > 1) {
            return new Error('Only one of  primary, secondary, success, warning, danger can be true')
        }
    }
}

export default Button