import { useRef, useEffect, useState } from "react";
import {showSlides} from "../functionUtil/functionsUtills"

import "../css/company.css"

import company_image_1 from "../images/company_1.jpg"
import company_image_2 from "../images/company_2.jpg"
import company_promotrice from "../images/company_promotrice.png"

//FontAwesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase, faCirclePlus, faCircleArrowRight, faLightbulb, faSeedling, faEnvelope, faLocationDot, faChevronLeft, faChevronRight, faCircleCheck, faHandshake} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"

//framer-motion
import { motion, AnimatePresence } from "framer-motion"

library.add(faLinkedin, faCirclePlus, faCircleArrowRight, faLightbulb, faSeedling, faEnvelope, faLocationDot, faChevronLeft, faChevronRight, faCircleCheck)



const Company = ( {exitVariants, revealVariants} )=>{
    const company_image_slide = useRef();
    const company_text_slide = useRef();
    const [showTitle, setShowTitle] = useState(false)

    const reference = []
    const overlayBoxVariants = 
    { 
        hidden: { 
            opacity: 0, 
            y: '-80vh' 
        }, 
        visible: { 
            opacity: 1, 
            y:0,
            transition: {duration: 0.5}
        } 
    }


    const companyTitleVariants = 
    { 
        initial: { 
            scale: 1,
            background: "#213341" ,
            color: "rgb(255, 255, 255)"
        }, 
        animate: { 
            scale: 1.05,
            background: "rgb(255, 255, 255)",
            color: "#213341",
            boxShadow: "0px 0px 8px #213341",
            transition: {
                duration: 0.5,
            }
        },
        
    }
    
  


    reference.push(company_image_slide)
    reference.push(company_text_slide)

    let slideIndex = 1 ;
    function plusSlides(n) {
        showSlides(slideIndex, slideIndex += n, reference);
    }
    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    
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
        <motion.section className="company"
            variants={exitVariants}
            initial="hidden"
            animate="visible"
            exit="exitPage"
        >
            <motion.div className="company_image"
                variants={overlayBoxVariants}
                initial="hidden"
                animate="visible"
            >
                <div ref={company_image_slide}>
                    <img src={company_image_1} alt="" className="company_image_mySlides" />
                   
                    <img src={company_image_2} alt="" className="company_image_mySlides" />
                    
                </div>
                <div ref={company_text_slide}>
                    <span className='company_image_text'>NOTRE CABINET</span>
                    <span className='company_image_text'>NOTRE CADRE DE TRAVAIL</span>
                </div>
                 
                <span className="company_btn_prev" onClick={()=>plusSlides(-1)}>❮</span>
                <span className="company_btn_next" onClick={()=>plusSlides(1)}>❯</span>
            </motion.div>
            <div className="company_overlay">
                <motion.div 
                    className="company_overlay_box company_overlay_box_white" 
                    initial={{ opacity: 0, scale: 0.25 }}
                    animate={{ opacity: 1, scale: 1, delay: 1 }}
                    transition={{ duration: 0.5 }}
                    >
                    <span  ><FontAwesomeIcon icon={faLightbulb} /></span>
                    
                    <div className="company_overlay_text" >Notre cabinet se veut un cabinet moderne et dynamique, qui s’entoure de professionnels hautement qualifiés et qui s’adapte  perpétuellement aux évolutions réglementaires et législatives.</div>
                </motion.div>
                
                <motion.div 
                    className="company_overlay_box company_overlay_box_blue"
                    initial={{ opacity: 0, scale: 0.25 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    >
                    <span  ><FontAwesomeIcon icon={faSeedling} /></span>
                    
                    <div className="company_overlay_text" >Dans le cadre de l’exécution de nos missions d’expertise comptable, nous nous positionnons comme un conseiller et un partenaire incontournable pour un accompagnement dans le développement.</div>
                </motion.div>
                <motion.div  
                    className="company_overlay_box company_overlay_box_darker"
                    initial={{ opacity: 0, scale: 0.25 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    >
                    <span  ><FontAwesomeIcon icon={faSeedling} /></span>
                    
                    <div className="company_overlay_text" >Dans le cadre de l’exécution de nos missions d’expertise comptable, nous nous positionnons comme un conseiller et un partenaire incontournable pour un accompagnement dans le développement.</div>
                </motion.div>
            </div>
            <div className="company_space_home_specialities">

            </div>
            <div className="company_specialities">
                <motion.div className="company_specialities_title"
                    variants={companyTitleVariants}
                    initial="initial"
                    whileHover="animate"

                    onClick={()=>{setShowTitle(!showTitle)}}
                > 
                    <p>Outre ces métiers, le cabinet est spécialisé en conseil en management dans les domaines suivants</p>  
                </motion.div>   

                <AnimatePresence>
                    {showTitle && <motion.div className="company_specialities_item"
                        initial={{y:-10, opacity:0}}
                        animate={{y:0, opacity:1,  transition:{duration: 2}}}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        <FontAwesomeIcon icon={faCircleArrowRight} className="icon" /><p>Performance de la fonction financière et de support</p>  
                    </motion.div>} 
                </AnimatePresence>
                  
                <AnimatePresence>
                    {showTitle && <motion.div className="company_specialities_item"
                        initial={{y:-10, opacity:0}}
                        animate={{y:0, opacity:1,  transition:{duration: 2, delay: 2}}}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        <FontAwesomeIcon icon={faCircleArrowRight} className="icon" /><p>Gestion des risques et du contrôle interne</p>  
                    </motion.div> }
                </AnimatePresence>
                
                <AnimatePresence>
                    {showTitle && <motion.div className="company_specialities_item"
                        initial={{y:-10, opacity:0}}
                        animate={{y:0, opacity:1,  transition:{duration: 2, delay: 4}}}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        <FontAwesomeIcon icon={faCircleArrowRight} className="icon" /><p>Services d’audit interne</p>  
                    </motion.div>   }    
                </AnimatePresence>
                
            </div>
            <div className="company_specialities_title_2"> 
                    <p>Notre principal objectif est de satisfaire nos clients à travers le recrutements de collaborateurs qualifiés dont les travaux sont
revus et supervisés.</p>  
                </div> 


            <div className="company_leader column"> 
                <h3>PROMOTRICE</h3> 
                <div className="company_leader_">
                    <motion.div className="company_leader_info"
                        variants={revealVariants}
                        initial="offscreen_left"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <div>
                            <h3>Carole EZIN</h3>
                            <h4>Expert-Comptable</h4>
                            <span>
                                <FontAwesomeIcon icon={faLinkedin} className="icon" /> 
                                <FontAwesomeIcon icon={faTwitter} className="icon" />
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                            </span>
                        </div>
                        <div className="company_leader_info_last">
                            <h5>ELEMAT EXPERTISE SARL</h5>
                            <p>
                                Le cabinet ELEMAT EXPERTISE SARL a été créé en 2021 par Madame Carole EZIN.  ELEMAT EXPERTISE est une marque sous laquelle des missions d’expertise comptable, de commissariat aux comptes et de conseils sont délivrées par des professionnels hautement qualifiés.
                            </p>
                            <p>Notre cabinet se positionne comme un partenaire au quotidien des entreprises, des professions libérales, des associations, etc.</p>
                        </div>
                    </motion.div> 
                    <motion.img 
                        variants={revealVariants}
                        initial="offscreen_left"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                        src={company_promotrice} alt="" />
                    
                </div>
                <div className="company_leader_bottom">
                    <motion.p
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "all" }}
                    >Dans le cadre de nos missions d’expertise comptable, nous réalisons les missions traditionnelles de de tenue de comptabilité, de révision comptable, d’établissement de bilan annuel, d’établissement de déclarations fiscales, d’élaboration de situation intermédiaire et de budget prévisionnel etc.
                    </motion.p>

                    <motion.p
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "all" }}
                    >Dans le cadre de nos missions de commissariat aux comptes, nous mettons en œuvre les diligences nécessaires à la certification des comptes en nous assurant qu’ils donnent une image fidèle de la situation financière et du patrimoine des entreprises.</motion.p>

                    <motion.p
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "all" }}
                    >Dans le cadre de nos missions de conseils, nous accompagnons les entreprises sous toute problématique soumise à notre attention dans le domaine comptable, financier, juridique, social, fiscal etc. Notre vocation est d’intervenir en appui à chaque étape de la vie des entreprises. Nous fournissons des conseils divers et assistons les dirigeants dans leurs choix stratégiques et dans leur mise en œuvre.</motion.p>
                </div>
                <div className="company_leader_boxes">
                    <motion.div className="company_leader_box company_overlay_box_white"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "all" }}
                    >
                        <span  ><FontAwesomeIcon icon={faHandshake} /></span>
                        Notre devise est de nous engager à accompagner nos clients de manière efficace, pour leur permettre de saisir les opportunités qui s’offrent à eux dans un environnement en perpétuel mutation.
                    </motion.div>
                    <motion.div className="company_leader_box company_overlay_box_darker"
                        variants={revealVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "all" }}
                    >
                        <span  ><FontAwesomeIcon icon={faBriefcase} /></span>
                        L’excellence cultivée au sein de notre cabinet nous permet de présenter des garanties de rigueur intellectuelle, de moralité, d’impartialité, d’indépendance et de disponibilité.
                    </motion.div>
                </div>
            </div>
            
           
           
            
           
            
        </motion.section>
    )
}


export default Company