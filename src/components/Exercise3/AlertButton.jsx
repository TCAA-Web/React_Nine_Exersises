import style from './AlertButton.module.scss'
export function AlertButton(props){

    return (
        <button className={style.buttonStyle} onClick={() => alert('You clicked on ' + props.title)}>{props.title}</button>
    )
}