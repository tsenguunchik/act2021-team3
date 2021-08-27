import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg'

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
      },
      {
        title: 'Other',
        path: '/boards/other',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'My Profile',
    path: '/myprofile',
    icon: <CgIcons.CgProfile />
  },
  {
    title: 'My Posts',
    path: '/myposts',
    icon: <GiIcons.GiPostStamp />
  },
  
];
