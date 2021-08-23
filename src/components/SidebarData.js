import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Boards',
    path: '/boards',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pre-University',
        path: '/boards/pre-university',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'In University/College',
        path: '/boards/in-university',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Post-University',
        path: '/boards/post-university',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'My Profile',
    path: '/myprofile',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'My Posts',
    path: '/myposts',
    icon: <IoIcons.IoMdPeople />
  },
  
];
