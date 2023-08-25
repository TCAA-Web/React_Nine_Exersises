import { Wrapper } from "../Wrapper/Wrapper";

export function Exercise5() {
    const animalArray = ['dog', 'snake', 'horse', 'goat', 'cow', 'camel', 'monkey']
    return (
        <Wrapper title="Exercise 5">
            <ul>
                {animalArray.map((animal, index) => {
                    return (<li key={index}>{animal}</li>)
                })}
            </ul>
        </Wrapper>
    )
}