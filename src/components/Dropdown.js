
import { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from "react-icons/go"
import { GoChevronUp } from "react-icons/go"
import Panel from './Panel'

function Dropdown({ options, value, onChange }) {
    // toggles dropdown menu
    const [isShow, setIsShow] = useState(false)
    // reference to div dropdown menu
    const divEl = useRef()
    // setup only one click listener
    // wherever user clicks except dropdown menu
    // for close dropdown
    useEffect(() => {
        const handler = (event) => {
            // if divEl not exist => quit
            if (!divEl.current) return
            // if exist and has not click on it close dropdown
            return !divEl.current.contains(event.target) &&
                setIsShow(current => current = false)
        }
        document.addEventListener('click', handler, true)
        // removes listener if dropdown not show on screen
        return () => document.removeEventListener('click', handler)
    }, [])

    const choiceOption = (option) => {
        onChange(option)
        setIsShow(current => current = false)
    }

    const renderedOptions = options.map((option) => {
        return (
            <Panel
                className='hover:bg-sky-100 rounded cursor-pointer p-1'
                key={option.value}
                onClick={() => choiceOption(option)}
            >
                {option.label}
            </Panel>
        )
    })

    const showDropdown = () => {
        setIsShow(current => !current)
    }

    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel
                onClick={showDropdown}
                className='flex justify-between items-center cursor-pointer '
            >
                {value?.label || 'Select...'}
                {isShow ? <GoChevronUp /> : <GoChevronDown />}
            </Panel>
            {isShow && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown