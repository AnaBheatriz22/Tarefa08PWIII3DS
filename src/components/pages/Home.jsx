import './Home.css';
import BannerRotativo from './BannerRotativo';

function Home(){
    return(
        <div>
          
            <h1>Home</h1>
            <BannerRotativo/>
            <p>Bem-vindo à nossa página inicial!</p>
            <img src="/public/blue.png" alt="Moranguinho" className="foto-canto" />
            <img src="/public/bia.png" alt= "Moranguinho Segurando Livro" className="bia"></img>

        </div>
    );
}
export default Home;