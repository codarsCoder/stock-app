import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu'

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(true);

    const showSideBar = ()=> {setSidebar(!sidebar) };

  return (
    <>
   <div className="navbar">
    <Link to='#' className="icon-link">
        <FaBars onClick={showSideBar}/>
    </Link>
   </div>
   <div className={`sidebarNav ${ sidebar ? `left` : ''}`}>
        <div className="sideBarWrap">
        <Link to='#' className="side-icon-link">
        <AiOutlineClose onClick={showSideBar}/>
    </Link>
    {SidebarData.map((item,index)=>{
        return (<SubMenu {...item} key={index} />);
    })}
        </div>
   </div>
   <div className={`main ${ sidebar ? null  : `right`}`}>
    <Outlet />
   </div>
   </>
  )
}

export default Sidebar