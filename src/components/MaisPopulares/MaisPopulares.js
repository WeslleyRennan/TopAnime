import style from './MaisPopulares.module.css'

function MaisPopulares(){
    return(
    <section>
        <h3 className={style.informa}>Mais populares</h3>

            <div className={style.containerSlideAnime}>
                <div className={style.buttonAnime} id="previousAnime">❮</div>
                <div className={style.containerItemsAnime} id="container-items-anime"></div>
                <div className={style.buttonAnime} id="nextAnime">❯</div>
            </div>
    </section>

    )
}

export default MaisPopulares