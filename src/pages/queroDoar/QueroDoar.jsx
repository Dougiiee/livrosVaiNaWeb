import iconeLivro from '../../assets/iconeLivroForm.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImg = (e) => {
        setImage_url(e.target.value)
    }

    const envioDados = async() =>{
        
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-livrosvnw.onrender.com/doar", dadosPEnviar)
        alert ("Obrigado, livro doado com sucesso!")
    }   

    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulario com suas informações e as informações do livro</p>
            <form onSubmit={(e)=>e.preventDefault()}>
            
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text"  placeholder='Título' onChange={capturaTitulo} required />
                <input type="text"  placeholder='Categoria' onChange={capturaCategoria} required />
                <input type="text"  placeholder='Autor' onChange={capturaAutor} required />
                <input type="text"  placeholder='Link da Imagem' onChange={capturaImg} required />
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
            </form>
        </section>
    )
}