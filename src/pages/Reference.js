//framer-motion
import { motion } from "framer-motion"
import { useRef, useEffect} from "react";
import {showSlides} from "../functionUtil/functionsUtills";
import reference_image_2 from "../images/reference_2.jpg"
import reference_logo_1 from "../images/reference_logo_1.png"
import reference_logo_2 from "../images/reference_logo_2.jpg"
import reference_logo_3 from "../images/reference_logo_3.png"
import reference_logo_4 from "../images/reference_logo_4.jpg"

import "../css/reference.css"

import { IoMdCloudDownload } from 'react-icons/io';
import { GiGears } from 'react-icons/gi';
import { FaBuilding, FaListAlt, FaSuitcase, FaEmpire, FaTachometerAlt, FaThLarge, FaStickyNote } from 'react-icons/fa';

const Reference = ({exitVariants, revealVariants})=>{

    
    
    const mission_image_slide = useRef();
    const mission_text_slide = useRef();

    const reference = []

    reference.push(mission_image_slide)
    reference.push(mission_text_slide)

    let slideIndex = 1 ;
    function plusSlides(n) {
        showSlides(slideIndex, slideIndex += n, reference);
    }

    
    useEffect(()=>{
         showSlides(slideIndex, slideIndex, reference);
    }, [0])

     /**swipe image automatically */
    useEffect(() => {
        let myInterval = setInterval(()=>{
            plusSlides(1)
        }, 8000);
         return () => {
           clearInterval(myInterval)
        }
    });

    return(
         <motion.div
            variants={exitVariants}
            initial="hidden"
            animate="visible"
            exit="exitPage"
        >
            <motion.div className="reference_image">
                <div ref={mission_image_slide}>
                    <img src={reference_image_2} alt="" className="default_image_mySlides" />                    
                </div>
                <div ref={mission_text_slide}>
                    <span className='default_image_text reference_image_text'>REFERENCES</span>
                </div>

            </motion.div>
            <div className="reference_badge">
                <div className="reference_row">
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><IoMdCloudDownload /></span>
                        <div> 
                            <strong>Missions D’audit Contractuel</strong> 
                            <br /> Accompagnement des sociétés pour des audits comptable et financier Audit et revue des créances Audit et revue des factures à établir Audit et revue du processus budgétaire Audit des comptes et du suivi de la gouvernance des institutions, organes et institutions spécialisées Audit économique et financier d’un secteur</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><GiGears /></span>
                        <div> <strong>Missions D’audit Organisationnel Et De Diagnostic</strong> <br />Audit organisationnel de sociétés Audit du système comptable et financier des sociétés Audit organisationnel, technique et financier de projets Diagnostic de l’organisation comptable et financière de sociétés Diagnostic de l’organisation, des procédures et des ressources humaines</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaBuilding /></span>
                        <div> <strong>Missions D’expertise, Évaluation Et Gestion De Patrimoine</strong> <br />Inventaire contradictoire physique et évaluation des biens de retour dans le cadre d’un contrat d’affermage Expertise-Evaluation des matériels et mobiliers de bureaux administratifs et d’habitations Expertise-Evaluation des équipements, matériels, installations, bâtiments complexes techniques industriels et spécifiques</div>
                    </motion.div>
                </div>
                <div className="reference_row">
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaListAlt /></span>
                        <div> <strong>Missions D’inventaire Physique Et Réévaluation Légale Des Immobilisations</strong><br />Inventaire des biens propres des contrats de concession (inventaire physique et réconciliation avec la comptabilité) Contrôle de l’inventaire et Réalisation des opérations de réévaluation légale des immobilisations des sociétés</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaSuitcase /></span>
                        <div> <strong>Mission De Mise En Place D’un Cadre Efficace Pour La Gouvernance</strong><br />Inventaire des biens propres des contrats de concession (inventaire physique et réconciliation avec la comptabilité) Contrôle de l’inventaire et Réalisation des opérations de réévaluation légale des immobilisations des sociétés</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaEmpire /></span>
                        <div> <strong>Mission De Modélisation Financière</strong><br />Elaboration de modèle financier et d’un plan d’affaires pour les sociétés Mise à jour de modèle financier Analyse financière</div>
                    </motion.div>
                </div>
                <div className="reference_row">
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaTachometerAlt /></span>
                        <div> <strong>Mission De Rédaction Des Manuels De Procédures</strong><br />Rédaction des procédures administratives, comptables, financières et opérationnelles Elaboration des fiches de postes Formation du personnel</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaThLarge /></span>
                        <div> <strong>Mission De Séparation Comptable</strong><br />Séparation comptable du patrimoine d’une société d’avec celui des différents projets dont elle a la charge de la mise en œuvre Séparation comptable du patrimoine pour affectation à deux entités distinctes</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaStickyNote /></span>
                        <div> <strong>Commissariat Aux Comptes</strong><br />Procéder à l’audit légal conformément aux exigences des normes ISA en appréciant la régularité et la sincérité des comptes Commissariat aux comptes</div>
                    </motion.div>
                </div>
                
                
                
            </div>
            <motion.div className="reference_title"
                variants={revealVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                QUELQUES INSTITUTIONS
            </motion.div>

            <motion.div className="reference_institution"
            >
                <motion.img src={reference_logo_1} alt="" 
                    variants={revealVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                />
                <motion.img src={reference_logo_2} alt="" 
                    variants={revealVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                />
                <motion.img src={reference_logo_3} alt="" 
                    variants={revealVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                />
                <motion.img src={reference_logo_4} alt="" 
                    variants={revealVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                />
            </motion.div>

        </motion.div>
    )
}

export default Reference