//react, hooks
import { useRef,useState, useEffect } from 'react';
import Moment from 'moment';
//framer-motion
import {motion} from 'framer-motion'
//import image
import home_image_1 from "../images/home_1.jpg"
import home_image_2 from "../images/home_2.jpg"

//import css
import '../css/home.css'

import home_mission_image_1 from "../images/home_mission_logo_1.png"
import home_mission_image_2 from "../images/home_mission_logo_2.png"
import home_mission_image_3 from "../images/home_3.jpg"

//Data
import { profession } from "../data/staticData"
import newsData from "../data/newsData"


//FontAwesome library
import {FaChevronLeft, FaChevronRight, FaEnvelope} from "react-icons/fa"
import {TbCircleCheck} from "react-icons/tb"






const Home = ( {exitVariants} )=>{
    
    const news_section = useRef();//
    const home_image_slide = useRef();
    const home_text_slide = useRef();/*TEXT AND SLIDE MUST BE THE SAME SIZE */
    const [scrollPos, setScrollPos] = useState(0);
    // const [arrowSate_Click, setArrowSate_Click] = useState(0);

    const [professionMenu, setProfessionMenu] = useState(profession);
    
    
    /**swipe image */
    let slideIndex = 1 ;
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    
    useEffect(()=>{
        showSlides(slideIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    function showSlides(n) {
        // console.log(n)
        let i;
        let slides =  home_image_slide.current.children ;
        let text =  home_text_slide.current.children ;
        // let dots = document.getElementsByClassName("demo");
        // let captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        /*TEXT AND SLIDE MUST BE THE SAME SIZE */
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            text[i].style.display = "none";
        }
        
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex-1].style.display = "block";
        text[slideIndex-1].style.display = "block";
        // dots[slideIndex-1].className += " active";
    }
    /**swipe image automatically */
    useEffect(() => {
        let myInterval = setInterval(()=>{
            plusSlides(1)
        }, 8000);
        return () => {
           clearInterval(myInterval)
        }
    });

    /**End swipe image */
   
    /******************************************/
    /************* Scroll news ****************/
    /******************************************/
    useEffect(() => {
        news_section.current.scroll({
            left: scrollPos,
            behavior: "smooth"
        });
    }, [scrollPos]);

    // useEffect(() => {
    //     news_section.current.addEventListener("scroll", (event) => {
    //         if(source_of_scroll_button){
    //             console.log("bouton cliqu??")
    //             setSource_of_scroll_button(false)
    //         }else{
    //             console.log("scroll tir??")
                
    //             console.log("position scroll after strech = "+news_section.current.scrollLeft)
    //         }
            
    //     });
       
    // },[]);

    // Click on submenu
    function submenuClick(id){
        setProfessionMenu(prevProfessionMenu => prevProfessionMenu.map(item => {return {...item, choosed:item.id === id? true : false}}))
    }



    function scrollToRight(){
        
         // Get the scrollable element which is the parent div.
        //let element = document.getElementById("news_section");
        // Set this to whatever you need. Right now it will start at 100, then go to 200, 300...
        // console.log(" right width= "+news_section.current.scrollWidth)
        // console.log(" right Left= "+news_section.current.scrollLeft)
        // console.log(" right = "+scrollPos)
        if((scrollPos + 280) <= (news_section.current.scrollWidth - news_section.current.offsetWidth)){
            //setScrollPos( prevScrollPos => prevScrollPos + 280);
            setScrollPos( news_section.current.scrollLeft + 280);
        }else{
            setScrollPos(news_section.current.scrollWidth - news_section.current.offsetWidth);
        }
        // setArrowSate_Click(arrowSate_Click + 1)
        // setSource_of_scroll_button(true)
    }
    function scrollToLeft(){
        // console.log(" Left width= "+news_section.current.scrollWidth)
        // console.log(" Left Left= "+news_section.current.scrollLeft)
        // console.log(" left = "+scrollPos)
        if((scrollPos - 280) > 0){
            setScrollPos(news_section.current.scrollLeft - 280);
        }else{
            setScrollPos(0);
        }
        // setArrowSate_Click(arrowSate_Click - 1)
        // setSource_of_scroll_button(true)
    }
    /**RENDER OF PAGE */
    return(
        <motion.section className="home"
            variants={exitVariants}
            initial="hidden"
            animate="visible"
            exit="exitPage"
        >
            <div className="home_image">
                <div ref={home_image_slide}>
                    <img src={home_image_1} alt="" className="home_image_mySlides" />
                   
                    <img src={home_image_2} alt="" className="home_image_mySlides" />
                    
                </div>
                <div ref={home_text_slide}>
                    <span className='home_image_text'>Bienvenu sur ELEMAT Expertise</span>
                    <span className='home_image_text'>Notre exp??rience ?? votre service</span>
                </div>
                 
                <span className="home_btn_prev" onClick={()=>plusSlides(-1)}>???</span>
                <span className="home_btn_next" onClick={()=>plusSlides(1)}>???</span>
            </div>
            <div className="overlay">
                <div  >Vous avez un projet ?</div>
                <div className="divider_light" ></div>
                <div className="overlay_text" >ELEMAT VOUS ACCOMPAGNE</div>  
            </div>
            <div className="home_menu">
                <span className={`home_menu_box ${professionMenu[0].choosed ? "home_menu_active":""}`}  onClick={()=>submenuClick(professionMenu[0].id)}>
                    {professionMenu[0].name}
                </span>
                <span className={`home_menu_box ${professionMenu[1].choosed ? "home_menu_active":""}`} onClick={()=>submenuClick(professionMenu[1].id)}>
                    {professionMenu[1].name}
                </span>
                <span className={`home_menu_box ${professionMenu[2].choosed ? "home_menu_active":""}`} onClick={()=>submenuClick(professionMenu[2].id)}>
                    {professionMenu[2].name}
                </span>
            </div>
            {/* Expertise comptable */}
            {professionMenu[0].choosed && <div className="home_mission">
                <div className="home_mission_item">
                    <div>
                        {/* <img src={ home_mission_image_1 } alt="" className="home_mission_item_logo"/> */}
                        <p className="title">Expertise comptable</p>
                        <hr />
                        <br />
                        <h3>Accompagner les soci??t??s dans leur gestion comptable en aidant dans la mise en place d???une organisation comptable et la s??curisation des informations</h3>

                        <div className="home_mission_item_text">
                            
                            <h5 className='row_display'><TbCircleCheck />  Tenue de la comptabilit??, r??vision comptable</h5>
                            <h5 className='row_display'><TbCircleCheck /> D??clarations fiscales</h5>
                            <h5 className='row_display'><TbCircleCheck /> Comptes annuels et des liasses fiscales</h5>
                            <h5 className='row_display'><TbCircleCheck /> Relations avec l???administration fiscale</h5>
                            
                        </div>
                    </div>
                    
                </div>
                <img src={home_mission_image_3} alt="" className="home_mission_item home_mission_image"/>
            </div>
            }
            {/* Audit */}
            {professionMenu[1].choosed && <div className="home_mission">
                <div className="home_mission_item">
                    <div>
                        <img src={ home_mission_image_1 } alt="" className="home_mission_item_logo"/>
                        <p className="title">Missions D???audit Contractuel</p>
                        <p className="home_mission_item_text">
                        Accompagnement des soci??t??s pour des audits comptable et financier Audit et revue des cr??ances Audit et revue des factures ?? ??tablir Audit et revue du processus budg??taire Audit des comptes et du suivi de la gouvernance des institutions, organes et institutions sp??cialis??es Audit ??conomique et financier d???un secteur
                        </p>
                    </div>
                    <div>
                        <img src={home_mission_image_2} alt="" className="home_mission_item_logo"/>
                        <p className="title">Missions D???audit Organisationnel Et De Diagnostic</p>
                        <p className="home_mission_item_text">
                            Audit organisationnel de soci??t??s Audit du syst??me comptable et financier des soci??t??s Audit organisationnel, technique et financier de projets Diagnostic de l???organisation comptable et financi??re de soci??t??s Diagnostic de l???organisation, des proc??dures et des ressources humaines
                        </p>
                    </div> 
                </div>
                <img src={home_mission_image_3} alt="" className="home_mission_item home_mission_image"/>
            </div>}
            {/* Conseils */}
            {professionMenu[2].choosed && <div className="home_mission">
                <div className="home_mission_item">
                    <p className="title">Conseils</p>
                        <hr />
                        <br />
                        <h3>Accompagner Les Organisations Dans L???am??lioration De Leur Performance Et La Ma??trise De Leurs Risques</h3>

                        <div className="home_mission_item_text">
                            
                            <h5 className='row_display'><TbCircleCheck /> Accompagnement De La Direction G??n??rale</h5>
                            <h5 className='row_display'><TbCircleCheck /> Accompagnement Des Directions Op??rationnelles</h5>
                            <h5 className='row_display'><TbCircleCheck /> Accompagner La Direction Financi??re</h5>
                            <h5 className='row_display'><TbCircleCheck /> Accompagner La Direction De L???Audit Interne</h5>
                            <h5 className='row_display'><TbCircleCheck /> Accompagner La Direction Des Syst??mes D???Information</h5>
                        </div> 
                </div>
                <img src={home_mission_image_3} alt="" className="home_mission_item home_mission_image"/>
            </div>}

            {/* News */}
            <div className="news">
                <div className="news_title">Actualit??s</div>
                <div className="news_">
                    <div className="news_slider">
                        <span className="news_slider_lr"><FaChevronLeft onClick={()=>scrollToLeft()} /></span>
                    </div>
                    <div className="news_boxes" id="news_section" ref={news_section}>
                        {newsData.map(item=>{
                            return (
                                <News key={item.id} title={item.title} image={item.image} link={item.link} date={item.date}/>
                            )
                        })}
                    </div>
                    <div className="news_slider">
                        <span className="news_slider_lr" onClick={scrollToRight}><FaChevronRight /></span>
                    </div>
                </div>
            </div>
                
            {/* Badges */}
            <div className="home_badge">
                <p>A propos d'ELEMAT</p>
                <p className="home_badge_title">POURQUOI NOUS FAIRE CONFIANCE</p>
                <div className="divider_light"></div>

                <div className="home_badge_row">
                    <div className="home_badges_item">
                        <div className="home_badges_item_frame">
                            <FaEnvelope className="home_badges_item_frame_icon" />
                            <span className="home_badges_item_frame_circle">
                                <span className="home_badges_item_frame_circle_ball"></span>
                            </span>
                        </div>
                        <p className="subtitle">Transparence</p>
                        <span className="divider_thin_dark"></span>
                        <p className="home_badges_item_text">Notre grille tarifaire est disponible en ligne</p>
                    </div>
                    <div className="home_badges_item">
                        <div className="home_badges_item_frame">
                            <FaEnvelope className="home_badges_item_frame_icon" />
                            <span className="home_badges_item_frame_circle">
                                <span className="home_badges_item_frame_circle_ball"></span>
                            </span>
                        </div>
                        <p className="subtitle">Disponibilit??</p>
                        <span className="divider_thin_dark"></span>
                        <p className="home_badges_item_text">En agence, par t??l??phone, par mail</p>
                    </div>
                    <div className="home_badges_item">
                        <div className="home_badges_item_frame">
                            <FaEnvelope className="home_badges_item_frame_icon" />
                            <span className="home_badges_item_frame_circle">
                                <span className="home_badges_item_frame_circle_ball"></span>
                            </span>
                        </div>
                        <p className="subtitle">Proximit??</p>
                        <span className="divider_thin_dark"></span>
                        <p className="home_badges_item_text">Un r??seau d'agences, de GAB et TPE de proximit??</p>
                    </div>
                    <div className="home_badges_item">
                        <div className="home_badges_item_frame">
                            <FaEnvelope className="home_badges_item_frame_icon" />
                            <span className="home_badges_item_frame_circle">
                                <span className="home_badges_item_frame_circle_ball"></span>
                            </span>
                        </div>
                        <p className="subtitle">Innovation</p>
                        <span className="divider_thin_dark"></span>
                        <p className="home_badges_item_text">Des produits et services pour am??liorer votre quotidien</p>
                    </div>
                    <div className="home_badges_item">
                        <div className="home_badges_item_frame">
                            <FaEnvelope className="home_badges_item_frame_icon" />
                            <span className="home_badges_item_frame_circle">
                                <span className="home_badges_item_frame_circle_ball"></span>
                            </span>
                        </div>
                        <p className="subtitle">Performance</p>
                        <span className="divider_thin_dark"></span>
                        <p className="home_badges_item_text">L'am??lioration permanente de notre efficacit?? op??rationnelle</p>
                    </div>
                </div>
             
                
            </div>
            
        </motion.section>
    )
}

const News = (props)=>{
    let image = "";
    try {
        image = require(`../images/${props.image}`)
    } catch (error) {
        // console.log("File not available")
        try {
            image = require(`../images/no_image_available.jpg`);
        } catch (error) {
            // console.log("default file not available")
        }
        
    } 

    const date = new Date(Date.parse(props.date))
    const formatDate = Moment(date).format('DD MMM YYYY')
    
    return(
        <div className="news_box">
            <div className="news_box_image">
                <img src={image} alt=""  />
            </div>
            <div className="news_box_info">
                <p>{formatDate}</p>
                <p className="subtitle">{props.title}</p>
            </div>
        </div>
    )
}


export default Home