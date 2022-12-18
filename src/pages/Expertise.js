import React from 'react'
//framer-motion
import {
  motion
} from "framer-motion";
import "../css/profession.css"


import { FaHandshake } from 'react-icons/fa';
import { BsFileSpreadsheet, BsFiles } from 'react-icons/bs';
import { TbReportSearch } from 'react-icons/tb';


const Expertise = ({revealVariants}) => {

  // const boxVariant = {
  //   visible_box: { opacity: 1, scale: 2,  transition:{duration: 0.5} },
  //   hidden_box: { opacity: 0, scale: 0  },
  // }
 


  return (
    <div>
        <motion.div className="default_title"
            variants={revealVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            EXPERTISE COMPTABLE
        </motion.div>
        <motion.div className="profession_text"
            variants={revealVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            Expertise comptable: accompagner les sociétés dans leur gestion comptable en aidant dans la mise en place d’une organisation comptable et la sécurisation des informations
        </motion.div>
        <div className="expertise_box">
       
            <motion.div
              // animate={{ x: 100 }} 
              // initial={{x: 0}} 
              className="expertise_box_ expertise_color_box_blue "
              variants={revealVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}>
                
              <BsFileSpreadsheet />
              Tenue de la comptabilité, révision comptable
            </motion.div>
            <motion.div  
               className="expertise_box_ expertise_color_box_white"
              variants={revealVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}>
                <TbReportSearch />
              Déclarations fiscales
            </motion.div>

            <motion.div  
               className="expertise_box_ expertise_color_box_darker "
              variants={revealVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}>
                < BsFiles />
              Comptes annuels et des liasses fiscales
            </motion.div>
            <motion.div  
              className="expertise_box_ expertise_color_box_dwhite"
              variants={revealVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}>
                <FaHandshake />
              Relations avec l’administration fiscale
            </motion.div>
        </div>
          
          
            
    </div>
    
  )
}

export default Expertise;


