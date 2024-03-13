import style from './footer.module.css'
import icon from './icon.png'

function footer(){
    return(
        <footer>
            <img src={icon} className={style.icon}/>
            <p>TopAnime</p>
            <p>"Você diz que tem um sonho… Esse sonho… Você tem de torná-lo realidade. Torne o seu sonho maravilhoso em realidade e ele se tornará a sua verdade. Se alguém pode fazer isso, é você!"</p>
        </footer>
    )
}

export default footer