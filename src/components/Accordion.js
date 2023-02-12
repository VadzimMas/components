import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import className from 'classnames'


function Accordion({ items, ...rest }) {

    const [expendedIndex, setExpendedIndex] = useState(-1)

    const handleClick = (index) => {
        setExpendedIndex((current) => { return current === index ? -1 : index })
    }

    const classes = className(rest.className, 'flex justify-between items-center p-3 bg-gray-100 border-b cursor-pointer',
        {
            // 'border something': true or false
        }
    )

    const renderedItems = items.map((item, index) => {
        const isExpended = expendedIndex === index
        const icon = <span> {isExpended ? <GoChevronDown /> : <GoChevronLeft />} </span>

        return (
            <div key={item.id}>
                <div
                    className={classes}
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpended && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })

    return (
        <div className="border-x border-t rounded">{renderedItems}</div>
    )
}

export default Accordion