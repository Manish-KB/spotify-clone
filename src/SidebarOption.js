import React from 'react'
import "./SidebarOptions.css"


function SidebarOption({title,Icon,image}) {
  return (
    <div className='sidebarOptions'>
        {Icon && <Icon className="sidebarOption_icon"/> }
     {Icon ? <h4>{title}</h4>:<> <img src={image} className="sidebar_image "/><h4 >{title}</h4></>}   
    </div>
  )
}

export default SidebarOption