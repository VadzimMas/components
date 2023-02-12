import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

function Modal({ onClose, children, actionBar }) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => { document.body.classList.remove('overflow-hidden') }
    }, [])

    return ReactDOM.createPortal(
        <div className='model-container'>
            <div
                onClick={onClose}
                className="
                  fixed
                    inset-0
                    bg-gray-500/60
                "
            >
            </div>
            <div
                className="
                    fixed
                    inset-40
                    bg-white
                    p-4
                    max-h-[500px]
                "
            >
                <div className="flex flex-col justify-between h-full max-w-[90vw]">
                    <div className="mb-2 overflow-y-auto bg-blue-500 max-h-[400px] text-white">
                        {children}
                    </div>
                    <div className='flex justify-end'>
                        {actionBar}
                    </div>
                </div>
            </div>

        </div>,
        document.querySelector('body')
    )
}

export default Modal