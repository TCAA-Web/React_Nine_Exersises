import style from './Wrapper.module.scss'

export function Wrapper({children, title}) {

    const randomColor = () => {
        let r = Math.floor(Math.random(0) * 255)
        let g = Math.floor(Math.random(0) * 255)
        let b = Math.floor(Math.random(0) * 255)
        let randomString = `rgb(${r},${g},${b})`
        return randomString
    }
    return (
        <>
            <section className={style.wrapper} style={{borderColor: randomColor()}}>
            <h2 className={style.heading} style={{textAlign: "center"}}>{title}</h2>
                {children}
            </section>
        </>
    )
}