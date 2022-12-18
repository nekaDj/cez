import React from 'react'
// import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'

import { FaBook, FaCopy, FaGavel, FaListAlt } from 'react-icons/fa';


import '../css/profession.css';

const Advisory = ( {revealVariants}) => {

//   const [showTitle, setShowTitle] = useState(false)
//   const advisoryTitleVariants = 
//     { 
//         initial: { 
//             scale: 1,
//             background: "#213341" ,
//             color: "rgb(255, 255, 255)"
//         }, 
//         animate: { 
//             scale: 1.05,
//             background: "rgb(255, 255, 255)",
//             color: "#213341",
//             boxShadow: "0px 0px 8px #213341",
//             transition: {
//                 duration: 0.5,
//             }
//         },
        
//     }


  return (
    
    <div>
        <div className="default_title">Conseil </div>
        <div className="default_title">Accompagner Les Organisations Dans L’amélioration De Leur Performance Et La Maîtrise De Leurs Risques</div>
        <div className="advisory_badge"> 
            <div className="advisory_badge_row">
                <AnimatePresence>
                    <motion.div className="advisory_badge_title"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        Accompagnement De La Direction Générale
                    </motion.div> 
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div className="advisory_badge_content"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        <div className="advisory_badge_content_row"> <span></span> <p>Mesure de la performance (tableaux de bords)</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Business plan</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Modèle économique</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Financement de projets, Partenaire Public Privé</p> </div>
                    </motion.div> 
                </AnimatePresence>
            </div>  
            <div className="advisory_badge_row">
                <AnimatePresence>
                    <motion.div className="advisory_badge_title"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        Accompagnement Des Directions Opérationnelles
                    </motion.div> 
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div className="advisory_badge_content"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        <div className="advisory_badge_content_row"> <span></span> <p>Stratégies opérationnelles : logistique, Achats, RH,…</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Diagnostic de la performance opérationnelle</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Refonte ou optimisation des processus opérationnels</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Assistance à la mise en œuvre de nouveaux modèles d’organisation</p> </div>
                    </motion.div> 
                </AnimatePresence>
            </div> 

            <div className="advisory_badge_row">
                <AnimatePresence>
                    <motion.div className="advisory_badge_title"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        Accompagnement Des Directions Opérationnelles
                    </motion.div> 
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div className="advisory_badge_content"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        <div className="advisory_badge_content_row"> <span></span> <p>Stratégies opérationnelles : logistique, Achats, RH,…</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Diagnostic de la performance opérationnelle</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Refonte ou optimisation des processus opérationnels</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Assistance à la mise en œuvre de nouveaux modèles d’organisation</p> </div>
                    </motion.div> 
                </AnimatePresence>
            </div> 

            <div className="advisory_badge_row">
                <AnimatePresence>
                    <motion.div className="advisory_badge_title"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        Accompagnement Des Directions Opérationnelles
                    </motion.div> 
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div className="advisory_badge_content"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        <div className="advisory_badge_content_row"> <span></span> <p>Stratégies opérationnelles : logistique, Achats, RH,…</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Diagnostic de la performance opérationnelle</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Refonte ou optimisation des processus opérationnels</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Assistance à la mise en œuvre de nouveaux modèles d’organisation</p> </div>
                    </motion.div> 
                </AnimatePresence>
            </div> 

            <div className="advisory_badge_row">
                <AnimatePresence>
                    <motion.div className="advisory_badge_title"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        Accompagnement Des Directions Opérationnelles
                    </motion.div> 
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div className="advisory_badge_content"
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1,  transition:{duration: 2, delay:0.25}}}
                        viewport={{ once: true }}
                        exit={{y:-10, opacity:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
                    > 
                        <div className="advisory_badge_content_row"> <span></span> <p>Stratégies opérationnelles : logistique, Achats, RH,…</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Diagnostic de la performance opérationnelle</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Refonte ou optimisation des processus opérationnels</p> </div>
                        <div className="advisory_badge_content_row"> <span></span> <p>Assistance à la mise en œuvre de nouveaux modèles d’organisation</p> </div>
                    </motion.div> 
                </AnimatePresence>
            </div>        
        </div>
        <div className="advisory_boxes">
            <motion.div className="advisory_box"
                variants={revealVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: "all" }}
            >
                <span  ><FaBook  /></span>
                <h3>Expertise Comptable</h3>
                accompagner les sociétés dans leur gestion comptable en aidant dans la mise en place d’une organisation comptable et la sécurisation des informations
            </motion.div>
            <motion.div className="advisory_box"
                variants={revealVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: "all" }}
            >
                <span  ><FaCopy /></span>
                <h3>Audits Contractuels</h3>
                émettre une opinion sur une information financière
            </motion.div>
            <motion.div className="advisory_box"
                variants={revealVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: "all" }}
            >
                <span  ><FaGavel /></span>
                    <h3>Juridique Et Fiscal</h3>
                accompagner les organisations dans l’amélioration de leur performance et la maîtrise de leurs risques
            </motion.div>
            <motion.div className="advisory_box"
                variants={revealVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: "all" }}
            >
                <span  ><FaListAlt /></span>
                <h3>Gestion Sociale</h3>
                prendre en charge la gestion sociale des entreprises
                
            </motion.div>
        </div>
    </div>
  )
}

export default Advisory