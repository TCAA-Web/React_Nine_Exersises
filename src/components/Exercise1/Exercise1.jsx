import { Wrapper } from "../Wrapper/Wrapper";
import style from "./Exercise1.module.scss";
// Exercise 1 - Firkantet box med gul baggrund og en centreret text i midten.

export function Exercise1() {
  return (
    <Wrapper title={"Exercise1"}>

      <div className={style.yellowSquare}>
        <p>Hello, World!</p>
      </div>

    </Wrapper>
  );
}