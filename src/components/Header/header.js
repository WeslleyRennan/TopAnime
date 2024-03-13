import style from './header.module.css'
import logo from './logo.png'
import lupa from './lupa.png'

function header(){

    function remover(){
        let lupa = document.getElementById('boxPesquisa')
        if(lupa.style.transform === 'translate(0px, 0px)'){
             lupa.style.transform = 'translate(0px, -40px)'
        }else{
            lupa.style.transform = 'translate(0px, 0px)'
        }
    }

    return(
        <header>
            <div className={style.Home}>
                <img src={logo} alt="logo" className={style.logo}/>
                    <ul className={style.Nav}>
                        <li id={style.CorLi}>Início</li>
                        <li>Anime</li>
                        <li>Flimes</li>
                    </ul>
                <img src={lupa} alt="lupa" className={style.lupa} onClick={remover}/>
            </div>

            <div className={style.boxPesquisa} id="boxPesquisa">
               <input type="text" placeholder="Pesquisa" className={style.pesquisa}/>
            </div>
        </header>
    )
}
export default header