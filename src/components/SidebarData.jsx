import React from 'react'
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/',
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: 'overview/users',
                icon: <IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: 'overview/revenue',
                icon: <IoIosPaper />,
            },
        ]

    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports',
                path: 'repots/reports1',
                icon: <IoIosPaper />,
            },
            {
                title: 'Reports',
                path: 'repots/reports2',
                icon: <IoIosPaper />,
            },
        ]

    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople />
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaEnvelopeOpenText />,

        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,

        subNav: [
            {
                title: 'Message 1',
                path: '/messages/message1',
                icon: <IoIosPaper />
            },
            {
                title: 'Message 2',
                path: '/messages/message2',
                icon: <IoIosPaper />
            }
        ]
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle />
    }
]
