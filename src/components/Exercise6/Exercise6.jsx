import { Wrapper } from "../Wrapper/Wrapper";
import { CreateList } from "./CreateList";
import { ReactComponent as HorseIcon} from './assets/svgs/horse.svg'
import { ReactComponent as CamelIcon} from './assets/svgs/camel.svg'
import { ReactComponent as DogIcon} from './assets/svgs/dog.svg'
import { ReactComponent as GoatIcon} from './assets/svgs/goat.svg'
import { ReactComponent as MonkeyIcon} from './assets/svgs/monkey.svg'
import { ReactComponent as SnakeIcon} from './assets/svgs/snake.svg'
import { ReactComponent as CowIcon} from './assets/svgs/cow.svg'

export function Exercise6() {
    
    const animalList = [
        {name: 'dog', icon: <DogIcon/>},
        {name: 'snake', icon: <SnakeIcon/>},
        {name: 'goat', icon: <GoatIcon/>},
        {name: 'horse', icon: <HorseIcon/>},
        {name: 'cow', icon: <CowIcon/>},
        {name: 'camel', icon: <CamelIcon/>},
        {name: 'monkey', icon: <MonkeyIcon/>},
        
    ]
    return (
        
        <Wrapper title="Exercise 6">
            <CreateList list={animalList}/>
        </Wrapper>
    )
}