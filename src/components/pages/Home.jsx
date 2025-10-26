import './Home.css';
import BannerRotativo from './BannerRotativo';

function Home(){
    return(
        <div>
          
            <h1>Home</h1>
            <BannerRotativo/>
            <p>Bem-vindo à nossa página inicial!</p>
            <img src="/public/moranguinho.png" alt="Moranguinho" className="foto-canto" />

        </div>
    );
}
export default Home;