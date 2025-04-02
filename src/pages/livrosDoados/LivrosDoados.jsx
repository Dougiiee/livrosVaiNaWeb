import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './LivrosDoados.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function LivrosDoados(){


    const [livros, setLivros] = useState([])

    const getLivros = async()=>{
        const resposta = await axios.get("https://api-livrosvnw.onrender.com/livros")
        setLivros(resposta.data)
    }
    

    useEffect(()=>{
        getLivros()
    },[])

    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
            
            {
                livros.map((item)=>(
                    <section>
                        <img src={item.image_url} alt="" />
                        <h3>{item.titulo}</h3>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>

                    </section>
                ))
            }
            
            
            
            {/* <section>
                    <img src={livroProtagonista} alt="imagem ilustrativa do livro o protagonista" />
                    <div>
                    <h3>O protagonista</h3>
                    <p>Susane Andrade</p>
                    <p>Ficção</p>
                    </div>
                </section> */}
            </section>
        </section>
        
    )
}

