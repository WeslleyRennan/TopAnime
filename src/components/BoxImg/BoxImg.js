import style from './BoxImg.module.css'
import img1 from './kime-fundo.png'
import img2 from './sete-fundo.png'
import img3 from './shinge-fundo.png'
import img4 from './one-fundo.png'

function BoxImg(){

    let i = 0;

    const imagens  = [img4, img3, img2, img1];

    function trocarImagem() {
      document.getElementById('IMG').src = imagens[i];
      i++;
      if (i >= imagens.length) {
        i = 0;
      }
    }

    setInterval(trocarImagem,  8000);

    return(
        <div className={style.BoxImg}>
            <img src={img1} className={style.img} id="IMG"/>
        </div>
    )
}

export default BoxImg