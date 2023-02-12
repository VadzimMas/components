import useNavigate from "hooks/useNavigate"
import React from "react"
import Link from "./Link"

const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Button', path: '/button' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },

]

const renderedLinks = links.map((link) => {
    return (
        <Link
            className={'p-[1px] mb-2 '}
            activeClassName='font-bold border-l-4 border-blue-500 pl-2 '
            key={link.path}
            to={link.path}
        >
            {link.label}
        </Link>)
})

function Sidebar() {
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col p-2">
            {renderedLinks}
        </div>
    )
}

export default Sidebar