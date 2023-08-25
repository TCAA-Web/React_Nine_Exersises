import { useState } from "react";
import { Wrapper } from "../Wrapper/Wrapper";

export function Exercise4(){
    const [count, setCount] = useState(0)

    return (
        <Wrapper title="Exercise 4">
            <p style={{fontSize: "1.3rem"}}>You clicked: {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </Wrapper>
    )
}