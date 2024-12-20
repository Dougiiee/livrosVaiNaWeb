import iconeLivro from '../../assets/iconeLivroForm.png'
import s from './queroDoar.module.scss'
export default function QueroDoar(){

    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulario com suas informações e as informações do livro</p>
            <form action="">
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="" id="" placeholder='Título' />
                <input type="text" name="" id="" placeholder='Categoria' />
                <input type="text" name="" id="" placeholder='Autor' />
                <input type="text" name="" id="" placeholder='Link da Imagem' />
                <input type="submit" value="Doar" className={s.buttonDoar}/>
            </form>
        </section>
    )
}