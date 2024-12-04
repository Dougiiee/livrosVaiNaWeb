import logoFacebook from '../../assets/logoFacebook.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'
import s from './footer.module.scss'

export default function Footer() {
    return(
    <footer>
        <section className={s.contatosFooter}>
            <p>4002-8922</p>
            <nav>
                <a href=""><img src={logoFacebook} alt="imagem logo da rede social facebook" /></a>
                <a href=""><img src={logoTwitter} alt="imagem logo da rede social twitter" /></a>
                <a href=""><img src={logoYoutube} alt="imagem logo da rede social youtube" /></a>
                <a href=""><img src={logoLinkedin} alt="imagem logo da rede social linkedin" /></a>
                <a href=""><img src={logoInstagram} alt="imagem logo da rede social instagram" /></a>
            </nav>
        </section>
        <section className={s.copyright}>
            <p>Layout desenvolvido pela Vai na Web para fins educativos - 2024</p>

        </section>
    </footer>
        )
}