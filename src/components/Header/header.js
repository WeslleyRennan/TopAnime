import style from './header.module.css'
import logo from './logo.png'
import Lupa from './lupa.png'
import X from './x.png'

function header(){

    function activeScroll() {
        if(window.scrollY > 0){
            document.getElementById('Home').style.background = '#201F1F'
        }else{
            document.getElementById('Home').style.background = '#201f1fd2'
        }
    }

    window.addEventListener('scroll', activeScroll)


    function remover(){
        let lupa = document.getElementById('boxPesquisa')
        let Xlupa = document.getElementById('Xlupa')
        if(lupa.style.transform === 'translate(0px, 0px)'){
             lupa.style.transform = 'translate(0px, -40px)'
             lupa.style.visibility = 'hidden'
             Xlupa.src = Lupa
        }else{
            lupa.style.transform = 'translate(0px, 0px)'
            lupa.style.visibility = 'visible'
            Xlupa.src = X
        }
    }

    return(
        <header>
            <div className={style.Home} id="Home">
                <img src={logo} alt="logo" className={style.logo}/>
                    <ul className={style.Nav}>
                        <li id={style.CorLi}>Início</li>
                        <li>Anime</li>
                        <li>Flimes</li>
                    </ul>
                <img src={Lupa} alt="lupa" className={style.lupa} id="Xlupa" onClick={remover}/>
            </div>

            <div className={style.boxPesquisa} id="boxPesquisa">
               <input type="text" placeholder="Pesquisa" className={style.pesquisa}/>
            </div>
        </header>
    )
}
export default header