import React from 'react'
import { motion } from "framer-motion"

import { IoMdCloudDownload } from 'react-icons/io';
import { GiGears } from 'react-icons/gi';

function Audit({revealVariants}) {
  return (
    <div>
       <motion.div className="default_title"
            variants={revealVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            AUDIT
        </motion.div>
        <div className="audit_badge">
                <motion.div className="audit_badge_item"
                    variants={revealVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <span className=""><IoMdCloudDownload /></span>
                    <div> 
                        <strong>Missions D’audit Contractuel</strong> 
                        <br /> Accompagnement des sociétés pour des audits comptable et financier Audit et revue des créances Audit et revue des factures à établir Audit et revue du processus budgétaire Audit des comptes et du suivi de la gouvernance des institutions, organes et institutions spécialisées Audit économique et financier d’un secteur</div>
                </motion.div>
                <motion.div className="audit_badge_item"
                    variants={revealVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <span className=""><GiGears /></span>
                    <div> <strong>Missions D’audit Organisationnel Et De Diagnostic</strong> <br />Audit organisationnel de sociétés Audit du système comptable et financier des sociétés Audit organisationnel, technique et financier de projets Diagnostic de l’organisation comptable et financière de sociétés Diagnostic de l’organisation, des procédures et des ressources humaines</div>
                </motion.div>
            </div>

    </div>
  )
}

export default Audit