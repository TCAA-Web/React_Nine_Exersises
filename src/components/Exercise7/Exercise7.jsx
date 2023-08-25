import { useState } from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import style from './Exercise7.module.scss' 

export function Exercise7(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function alertUser(){
        alert(`Hello ${firstName} ${lastName}`)
    }

    return (
        <Wrapper title="Exercise 7">
            <form className={style.formStyle}>
                <div>
                    <input onChange={(event) => setFirstName(event.target.value)} placeholder="First name"></input>
                    <input onChange={(event) => setLastName(event.target.value)} placeholder="Last name"></input>
                    <button onClick={alertUser} type="button">Greet me</button>
                </div>
            </form>
        </Wrapper>
    )
}