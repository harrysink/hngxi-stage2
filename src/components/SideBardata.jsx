import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBardata1 = [
    {
        title: 'Bedroom',
        path: 'bedroom',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subBed: [
            {
                title: 'Duvet Cover Sets',
                path: 'duvet'
            },
            {
                title: 'Sheets',
                path: 'sheets'
            },
            {
                title: 'Bedspreads & Blankets',
                path: 'bedsheets'
            },
            {
                title: 'Blankets',
                path: 'blankets'
            },
            {
                title: 'Curtains',
                path: 'curtains'
            },
            {
                title: 'Pillowcases',
                path: 'pillowcases'
            },
            {
                title: 'Rugs',
                path: 'rugs'
            },
        ]
    },
    {
        title: 'Living Room',
        path: 'livingroom',
    },
    {
        title: 'Child Room',
        path: 'childroom'
    },
    {
        title: 'Bathroom',
        path: 'bathroom'
    },
    {
        title: 'Outdoor',
        path: 'outdoor'
    }
]

export const SideBardata2 = [
    {
        title: 'Conscious',
        path: 'conscious'
    },
    {
        title: 'Premium Quality',
        path: 'premiumquality'
    },
    {
        title: 'Classic Collection',
        path: 'classiccollection'
    }
]