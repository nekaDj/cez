import {Link} from 'react-router-dom'
import '../css/footer.css'

import logo from '../images/logo.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLocationDot, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faLocationDot, faPhone, faGlobe)

const Footer = ()=>{
    return(
        <footer>
            <div className="row_footer">
                <div className="footer_column">
                    <div className="footer_title">Visions et Garanties</div>
                    <div className="footer_title_divider"></div>
                    
                    <Link to="/" className=""> <span>Accueil</span> </Link>
                    <Link to="/company" className="">Notre Cabinet</Link>
                    <Link to="/mission" className="">Vision et garanties</Link>
                    <Link to="/profession" className="">métier</Link>
                    <Link to="/reference" className="">Référence</Link>
                    <Link to="/contact" className="">Contact</Link>
                </div>
                <div className="footer_column">
                    <div className="footer_title">Visions et Garanties</div>
                    <div className="footer_title_divider"></div>
                    
                    <p>Excellence</p>
                    <p>Rigueur intéllectuelle</p>
                    <p>Impartiabilité</p>
                    <p>Indépendance</p>
                    <p>Disponibilité</p>
                    <p>Ecoute</p>
                </div>
                <div className="footer_column">
                    <div className="footer_title">Références</div>
                    <div className="footer_title_divider"></div>
                    
                    <a href='http://www.ifac.org' target="_blank" rel="noopener noreferrer">www.ifac.org</a>
                    <a href='http://www.ohada.com' target="_blank" rel="noopener noreferrer">www.ohada.com</a>
                    <a href='http://www.impots.finances.gouv.bj' target="_blank" rel="noopener noreferrer">www.impots.finances.gouv.bj</a>
                    <a href='http://www.globenin.com' target="_blank" rel="noopener noreferrer">www.globenin.com</a>
                </div>
                <div className="footer_column">
                    <div className="footer_title">Contact</div>
                    <div className="footer_title_divider"></div>
                    
                    <i><FontAwesomeIcon icon={faLocationDot} className="" /> 1 ère rue à droite de la salle des fêtes le Majestic Fidjrossè</i>
                    <i><FontAwesomeIcon icon={faPhone} className="" /> +229 95 61 28 95</i>
                    <i><FontAwesomeIcon icon={faEnvelope} className="" /> cezin@elematexpertise.com</i>
                    <i><FontAwesomeIcon icon={faGlobe} className="" /> www.elematexpermtise.com</i>
                </div>
            </div>
            <div className="footer_divider"></div>
            <div className="footer_credit">
                <div className='footer_credit_logo'> <img src={logo} alt="" /> ELEMAT Expertise</div>
                <div className='footer_credit_ref'>Powered By <a href="http://www.ndoumbatchantchou.com" target="_blank" rel="noopener noreferrer">Neska</a></div>
            </div>
        </footer>
    )
}

export default Footer;