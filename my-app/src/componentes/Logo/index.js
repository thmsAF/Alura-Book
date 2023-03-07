import logo from "../../Imagens/logo.svg";
import './estilo.css';
function Logo (){
    return (
        <div className='logo'>
            <img src={logo}
                 alt='logo'
                 className='logo-img'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}
export default Logo