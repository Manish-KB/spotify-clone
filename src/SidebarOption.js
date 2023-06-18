import React from 'react'
import "./SidebarOptions.css"


function SidebarOption({title,Icon}) {
  return (
    <div className='sidebarOptions'>
        {Icon && <Icon className="sidebarOption_icon"/> }
     {Icon ? <h4>{title}</h4>:<h4>{title}</h4>}   
    </div>
  )
}

export default SidebarOption