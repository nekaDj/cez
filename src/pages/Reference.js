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
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                            <strong>Missions D???audit Contractuel</strong> 
                            <br /> Accompagnement des soci??t??s pour des audits comptable et financier Audit et revue des cr??ances Audit et revue des factures ?? ??tablir Audit et revue du processus budg??taire Audit des comptes et du suivi de la gouvernance des institutions, organes et institutions sp??cialis??es Audit ??conomique et financier d???un secteur</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><GiGears /></span>
                        <div> <strong>Missions D???audit Organisationnel Et De Diagnostic</strong> <br />Audit organisationnel de soci??t??s Audit du syst??me comptable et financier des soci??t??s Audit organisationnel, technique et financier de projets Diagnostic de l???organisation comptable et financi??re de soci??t??s Diagnostic de l???organisation, des proc??dures et des ressources humaines</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaBuilding /></span>
                        <div> <strong>Missions D???expertise, ??valuation Et Gestion De Patrimoine</strong> <br />Inventaire contradictoire physique et ??valuation des biens de retour dans le cadre d???un contrat d???affermage Expertise-Evaluation des mat??riels et mobiliers de bureaux administratifs et d???habitations Expertise-Evaluation des ??quipements, mat??riels, installations, b??timents complexes techniques industriels et sp??cifiques</div>
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
                        <div> <strong>Missions D???inventaire Physique Et R????valuation L??gale Des Immobilisations</strong><br />Inventaire des biens propres des contrats de concession (inventaire physique et r??conciliation avec la comptabilit??) Contr??le de l???inventaire et R??alisation des op??rations de r????valuation l??gale des immobilisations des soci??t??s</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaSuitcase /></span>
                        <div> <strong>Mission De Mise En Place D???un Cadre Efficace Pour La Gouvernance</strong><br />Inventaire des biens propres des contrats de concession (inventaire physique et r??conciliation avec la comptabilit??) Contr??le de l???inventaire et R??alisation des op??rations de r????valuation l??gale des immobilisations des soci??t??s</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaEmpire /></span>
                        <div> <strong>Mission De Mod??lisation Financi??re</strong><br />Elaboration de mod??le financier et d???un plan d???affaires pour les soci??t??s Mise ?? jour de mod??le financier Analyse financi??re</div>
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
                        <div> <strong>Mission De R??daction Des Manuels De Proc??dures</strong><br />R??daction des proc??dures administratives, comptables, financi??res et op??rationnelles Elaboration des fiches de postes Formation du personnel</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaThLarge /></span>
                        <div> <strong>Mission De S??paration Comptable</strong><br />S??paration comptable du patrimoine d???une soci??t?? d???avec celui des diff??rents projets dont elle a la charge de la mise en ??uvre S??paration comptable du patrimoine pour affectation ?? deux entit??s distinctes</div>
                    </motion.div>
                    <motion.div className="reference_badge_item"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <span className="reference_icon"><FaStickyNote /></span>
                        <div> <strong>Commissariat Aux Comptes</strong><br />Proc??der ?? l???audit l??gal conform??ment aux exigences des normes ISA en appr??ciant la r??gularit?? et la sinc??rit?? des comptes Commissariat aux comptes</div>
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