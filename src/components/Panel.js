import classNames from 'classnames'

function Panel({ children, className, ...rest }) {
    const finalClassNames = classNames(
        className,
        'border rounded p-3 shadow bg-white w-full',
        {

        })

    return (
        <div className={finalClassNames} {...rest}>
            {children}
        </div>
    )
}

export default Panel