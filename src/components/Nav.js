
import { Link } from "react-router-dom"
import {motion, AnimatePresence} from 'framer-motion'

//css
import logo from '../images/logo.jpg'

//Data
import { menuData } from "../data/staticData"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react"

library.add(faBars)

const Nav = ({location})=>{

    const ref_nav = useRef();
    // const [isActive, setIsActive] = useState(false)
    const [menuDisappearOnMobile, setMenuDisappearOnMobile] = useState(false)
    const [menuDataImported, setMenuDataImported] = useState(menuData)

    // function changeActiveState(id){
    //     setMenuDataImported(prevMenuDataImported=>
    //         prevMenuDataImported.map(
    //             item => {return {...item, isActive: item.id === id? true : false} } 
    //         )
            
    //     )
    // }

    function makeMenuOnMobileDisappear(id, type){
        console.log("menu clicked on ùpbile")
        
        if(type==="submenu"){//If it is not a menu, but a submenu, we make the menu disappear
            setMenuDisappearOnMobile(true)
            console.log('whats the problem?'+type)
        }else if( type==="menu"){
            //we get the menu
            console.log('mince')
            let menu = menuDataImported.filter((item)=>id===item.id) 
            console.log(menu)
            if(menu[0].subMenu.length !== 0){//if menu have submemnu, DONT make disappear
                    setMenuDisappearOnMobile(false)
                    console.log('menu')
                    
            }else{
                setMenuDisappearOnMobile(true)
                console.log('sous menu')
            }
            
            
        }
        
    }
    

    function changeSubMenuStateToActive(id){
        console.log("enter mouse")
        setMenuDataImported(prevMenuDataImported=>
            prevMenuDataImported.map(
                item => {return {...item, isSubMenuActive: item.id === id? true : false} } 
            )
            
        )
    }

    function changeSubMenuStateToNotActive(id){
        setMenuDataImported(prevMenuDataImported=>
            prevMenuDataImported.map(
                item => {return {...item, isSubMenuActive: item.id === id? false : false} } 
            )
            
        )
    }
    

    useEffect(function(){
        window.addEventListener("scroll", (event) => {
            if(window.scrollY > 80){
                ref_nav.current.classList.add('nav_scroll')
            }else{
                ref_nav.current.classList.remove('nav_scroll')
            }
        });
    })




    return(
        <nav className="" ref={ref_nav}>
            <img src={logo} alt="" className="logo"/>
            {/* <div className="menu"> */}
            <input type="checkbox" id="check" onClick={()=>setMenuDisappearOnMobile(prev =>!prev)}/>
            <label htmlFor="check">
                <span><FontAwesomeIcon icon={faBars} /></span>
            </label>
            <ul className={ menuDisappearOnMobile?"nav_ul_disappear":"nav_ul_appear"}>
                {menuDataImported.map(item=>{
                    return <LinkNav key={item.id} id={item.id} link={item.link} name={item.name} 
                                    isActive={location.pathname===item.link?true:(location.pathname.startsWith(`${item.link}/`)?true:false)} 
                                    subMenu={item.subMenu} 
                                    // changeActiveStateIdEqual={changeActiveState} 
                                    makeMenuOnMobileDisappear={makeMenuOnMobileDisappear}
                                    
                    
                    changeSubMenuStateToActiveForId={changeSubMenuStateToActive} 
                    changeSubMenuStateToNotActiveForId={changeSubMenuStateToNotActive} 
                    isSubMenuActive = {item.isSubMenuActive}/>
                })}
                
                {/* <li><Link to="/" className=""> {menuData[0].name}</Link></li>
                <li><Link to="/company" className="">{menuData[1].name}</Link></li>
                <li><Link to="/mission" className="">{menuData[2].name}</Link></li>
                <li><Link to="/profession" className="">{menuData[3].name}</Link></li>
                <li><Link to="/reference" className="">{menuData[4].name}</Link></li>
                <li><Link to="/contact" className="">{menuData[5].name}</Link></li> */}
            </ul>
            {/* </div> */}
        </nav>
    )
}


export default Nav




const LinkNav = (props) => {
    
    // console.log(`menu = ${props.name}, id = ${props.id} and isActive=${props.isActive}`)
    return(
        <motion.li 
            animate={{ transition:{duration: 1, ease: "easeInOut"} }}
            // onClick={()=>props.changeActiveStateIdEqual(props.id)} 
            onMouseEnter={()=>props.changeSubMenuStateToActiveForId(props.id)}
            onMouseLeave={()=>props.changeSubMenuStateToNotActiveForId(props.id)}
            >
            <Link to={props.link} className={props.isActive?"nav_active":""} onClick={()=>props.makeMenuOnMobileDisappear(props.id, "menu")} > {props.name}</Link>
            <AnimatePresence>
                {(props.subMenu.length !== 0 && props.isSubMenuActive) && 
                <motion.div
                    initial={{ opacity: 0, top: 50}}
                    animate={{ opacity: 1, top: 30,  transition:{duration: 1, ease: "easeInOut"} }}
                    exit={{ opacity: 0, top: 50,  transition:{duration: 1, delay:0} }}
                    className="submenu"
                    onClick={()=>props.makeMenuOnMobileDisappear(-1, "submenu")}
                >
                    {/* <ul className="submenu"> */}
                        {props.subMenu.map(function(item){
                            return <Link key={item.idSubMenu} to={item.link} className={item.isActive?"nav_active":""} 
                                        > {item.name}</Link> 
                        })}
                    {/* </ul> */}
                </motion.div>}
            </AnimatePresence>
        </motion.li>
    )
}