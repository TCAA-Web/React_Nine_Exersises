import style from "./Card.module.scss";

export function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.cardInner}>
        <div className={style.cardFront}>
          <img src={props.src} alt={props.name}></img>
          <p>{props.name}</p>
          <p>Title: {props.title}</p>
          <p>Skill: {props.skill}</p>
        </div>
        <div className={style.cardBack}>
          <p>Street name: {props.street}</p>
          <p>City: {props.city}</p>
          <p>State: {props.state}</p>
          <p>Country: {props.country}</p>
        </div>
      </div>
    </div>
  );
}
