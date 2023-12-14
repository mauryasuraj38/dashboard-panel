import Logo from "../../images/logo.png"
import "./sidebar.css"
import { SidebarData } from "../../Data/Data.js"
import { useState } from "react";

function Sidebar() {

  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
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
            <i class="uil uil-sign-out-alt"></i>
        </div>
      </div>

    </div>
  )
}

export default Sidebar