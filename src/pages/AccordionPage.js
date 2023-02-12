import React from 'react'
import Accordion from '../components/Accordion'

function AccordionPage() {
    const items = [
        {
            id: `${Math.random()}`,
            label: "Can I use react in a project?",
            content: "Yes you can use react in any project you want"
        },
        {
            id: `${Math.random()}`,
            label: "Can I use javaScript in a project?",
            content: "Yes you can use javaScript in any project you want"
        },
        {
            id: `${Math.random()}`,
            label: "Can I use css in a project?",
            content: "Yes you can use css in any project you want"
        }
    ]
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage