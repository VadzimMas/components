import Button from "components/Button";
import Modal from "components/Modal";
import React, { useState } from "react"



function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(!showModal)
    }
    const actionBar = (
        <Button
            onClick={handleClick}
            className=''
            primary
        >
            Accept it!
        </Button>
    )

    const model = (
        <Modal
            onClose={handleClick}
            actionBar={actionBar}
        >
            <p >
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcv
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcv
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcv
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcv
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcv
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcv
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcv
                skdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp  msomepokvp orkepomcpre wmcpomw epocprw eomcvskdm lmdlkplemp
            </p>
        </Modal>
    )

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && model}
        </div>
    )
}

export default ModalPage

