import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SubMenu = ({path,title,icon,iconOpened,iconClosed,subNav}) => {

  const [subnav, setSubnav] = useState(false);

  const showSubnav = ()=> setSubnav(!subnav);

  return (
    <>
    <Link className='sub-link' to={path} onClick={showSubnav}>
      <div>
        {icon}
        <span>{title}</span>
      </div>
      <div>
        {subNav && subnav ? iconOpened : subNav ? iconClosed : null}

      </div>
    </Link>
    {subnav && subNav.map((item,index) => {
      return (
        <Link key={index} className='sub-dropdown-link' to={item.path}>
        <div>
          {item.icon}
          <span>{item.title}</span>
        </div>
      </Link>
      )
    })}
    </>
  )
}

export default SubMenu