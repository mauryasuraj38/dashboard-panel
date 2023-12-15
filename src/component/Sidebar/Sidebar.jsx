import Logo from "../../images/logo.png"
import "./sidebar.css"
import { SidebarData } from "../../Data/Data.js"
import { useState } from "react";
import { motion } from "framer-motion";

function Sidebar() {

  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false:{
      left: '-60%'
    }
  }

  return (
    <>
      <div className="bars"
      style={expanded?{left:"60%"}:{left:"5%"}}
      onClick={()=>setExpanded(!expanded)}
      >
      <i class="uil uil-bars"></i>
      </div>
      <motion.div className="Sidebar"
      variants={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`:''}
      >
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((value,index) => (
              <div className={selected===index?'menuItem active':'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
              >
                <i class={value.iconClass}></i>
                <span>{value.heading}</span>
              </div>
          ))}
          <div className="menuItem">
              <i className="uil uil-sign-out-alt"></i>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar