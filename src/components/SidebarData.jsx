import React from 'react'
import { FaCartPlus, FaEnvelopeOpenText, FaProductHunt, FaShoppingCart, FaStoreAlt } from 'react-icons/fa'
import { AiFillDashboard } from 'react-icons/ai'
import {  MdPointOfSale } from 'react-icons/md'
import {  SiSellfy } from 'react-icons/si'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import { GiAlliedStar } from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Dashboard',
        url: '/',
        icon: <AiFillDashboard />,
    },
    {
        title: 'Buy/Sell',
        path: '',
        icon: <MdPointOfSale />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Purchases',
                path: '/purchases/',
                icon: <FaShoppingCart />,
            },
            {
                title: 'Sales',
                path: '/sales/',
                icon: <SiSellfy />,
            },
          
        ]

    },
    {
        title: 'Products',
        url: '/products/',
        icon: <FaProductHunt />,
    },
    {
        title: 'Firms',
        url: '/firms/',
        icon: <FaStoreAlt />,

    },
    {
        title: 'Brands',
        url: '/brands',
        icon: <GiAlliedStar />,
    }
]
