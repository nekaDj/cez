//framer-motion
import { motion } from "framer-motion"
import { useRef, useEffect} from "react";
import {showSlides} from "../functionUtil/functionsUtills";
import { Outlet } from 'react-router-dom';

import prof_image_1 from "../images/mission_1.jpg"
import prof_image_2 from "../images/mission_2.jpg"

const Profession = ({exitVariants})=>{
    const prof_image_slide = useRef();
    const prof_text_slide = useRef();

    const reference = []

    reference.push(prof_image_slide)
    reference.push(prof_text_slide)

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
            <motion.div className="default_image">
                <div ref={prof_image_slide}>
                    <img src={prof_image_1} alt="" className="default_image_mySlides" />
                    <img src={prof_image_2} alt="" className="default_image_mySlides" />
                    
                </div>
                <div ref={prof_text_slide}>
                    <span className='default_image_text'>NOTRE METIER</span>
                    <span className='default_image_text'>NOTRE PASSION</span>
                </div>
                 
                <span className="default_btn_prev" onClick={()=>plusSlides(-1)}>❮</span>
                <span className="default_btn_next" onClick={()=>plusSlides(1)}>❯</span>

            </motion.div>
            <Outlet />
        </motion.div>
    )
}


export default Profession