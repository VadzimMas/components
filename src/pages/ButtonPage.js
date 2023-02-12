import React from "react";
import { GoBell, GoFileDirectory, GoBookmark, GoFileMedia } from "react-icons/go";
import Button from '../components/Button';
function ButtonPage() {

    return (
        <div>
            <Button />
            <Button primary
                onClick={() => console.log("handleClick...")}
                onMouseOver={() => console.log("handleMouseOver...")}
                className="mb-5"
            >
                <GoBell />
                Click me
            </Button>
            <Button secondary ><GoFileDirectory />Click me</Button>
            <Button success  ><GoBookmark />Click me</Button>
            <Button warning ><GoFileMedia />Click me</Button>
            <Button danger >Click me</Button>

            <Button primary rounded ><GoBell />Click me</Button>
            <Button secondary rounded ><GoFileDirectory />Click me</Button>
            <Button success rounded ><GoBookmark />Click me</Button>
            <Button warning rounded ><GoFileMedia />Click me</Button>
            <Button danger rounded >Click me</Button>

            <Button primary outline >Click me</Button>
            <Button secondary outline >Click me</Button>
            <Button success outline >Click me</Button>
            <Button warning outline >Click me</Button>
            <Button danger outline >Click me</Button>

            <Button primary outline rounded >Click me</Button>
            <Button secondary outline rounded >Click me</Button>
            <Button success outline rounded >Click me</Button>
            <Button warning outline rounded >Click me</Button>
            <Button danger outline rounded >Click me</Button>
        </div>
    )
}

export default ButtonPage