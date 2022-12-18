//framer-motion
import { motion } from "framer-motion"
import { useRef, useEffect } from "react";
import {showSlides} from "../functionUtil/functionsUtills";
import mission_image_1 from "../images/mission_1.jpg"

import "../css/mission.css"

import { FaBeer, FaMedal, FaSatelliteDish, FaRoute, FaPeopleArrows, FaPeopleCarry } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';
import { GiMaterialsScience } from 'react-icons/gi';




const Mission = ({exitVariants, revealVariants})=>{
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
        <motion.section
            variants={exitVariants}
            initial="hidden"
            animate="visible"
            exit="exitPage"
            
        >
            <motion.div className="mission_image">
                <div ref={mission_image_slide}>
                    <img src={mission_image_1} alt="" className="default_image_mySlides" />
                   
                    <img src={mission_image_1} alt="" className="default_image_mySlides" />
                    
                </div>
                <div ref={mission_text_slide}>
                    <span className='default_image_text'>NOTRE CABINET</span>
                    <span className='default_image_text'>NOTRE CADRE DE TRAVAIL</span>
                </div>
                 
                <span className="default_btn_prev" onClick={()=>plusSlides(-1)}>❮</span>
                <span className="default_btn_next" onClick={()=>plusSlides(1)}>❯</span>

            </motion.div>
            <motion.div className="default_title"
                variants={revealVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                NOTRE VISION
            </motion.div>
            <motion.div className="mission_text"
                variants={revealVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                Nous engager à accompagner nos clients de manière efficace, pour leur permettre de saisir les opportunités qui s’offrent à eux dans un environnement en perpétuelle mutation.
            </motion.div>
            <motion.div className="default_title"
                variants={revealVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                NOS GARANTIES
            </motion.div>

            <div className="mission_bagde_column">
                <div className="mission_bagde_row">
                    <motion.div  className="mission_bagde mission_bagde_color_blue_dark"
                        variants={revealVariants}
                        initial="offscreen_left"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }} 
                    > <FaMedal /> PROXIMITE</motion.div>

                    <motion.div className="mission_bagde mission_bagde_color_blue_light"
                        variants={revealVariants}
                        initial="offscreen_right"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                    > <FaBeer /> INDEPENDANCE</motion.div>
                </div>
                <div className="mission_bagde_row">
                    <motion.div className="mission_bagde mission_bagde_color_blue_light"
                        variants={revealVariants}
                        initial="offscreen_left"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                    > <FaPeopleCarry />ENGAGEMENT</motion.div>

                    <motion.div className="mission_bagde mission_bagde_color_blue_dark"
                        variants={revealVariants}
                        initial="offscreen_right"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                    > <AiFillClockCircle /> DISPONIBILITE</motion.div>
                </div >
                <div className="mission_bagde_row">
                    <motion.div className="mission_bagde mission_bagde_color_blue_dark"
                        variants={revealVariants}
                        initial="offscreen_left"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                    > <GiMaterialsScience /> RIGUEUR INTELLECTUELLE</motion.div>
                    <motion.div className="mission_bagde mission_bagde_color_blue_light"
                        variants={revealVariants}
                        initial="offscreen_right"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                    > <FaSatelliteDish /> ECOUTE</motion.div>
                </div>
                <div className="mission_bagde_row">
                    <motion.div className="mission_bagde mission_bagde_color_blue_light"
                        variants={revealVariants}
                        initial="offscreen_left"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                    > <FaPeopleArrows /> IMPARTIALITE</motion.div>
                    <motion.div className="mission_bagde mission_bagde_color_blue_dark"
                        variants={revealVariants}
                        initial="offscreen_right"
                        whileInView="onscreen_from_left_or_right"
                        viewport={{ once: true, amount: 0.8 }}
                    > <FaRoute /> FLEXIBILTE</motion.div>
                </div>
            </div>



        </motion.section>
    )
}


export default Mission