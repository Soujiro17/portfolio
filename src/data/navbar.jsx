import House from '../components/Icons/House'
import Folder from '../components/Icons/Folder'
import Award from '../components/Icons/Award'
import Info from '../components/Icons/Info'
import Send from '../components/Icons/Send'

export const navbarItems = [
    {
        name: 'Home',
        url: '/',
        icon: <House />
    },
    {
        name: 'Projects',
        url: '/#projects',
        icon: <Folder />
    },
    {
        name: 'Skills',
        url: '/#skills',
        icon: <Award />
    },
    {
        name: 'About me',
        url: '/#about-me',
        icon: <Info />
    },
    {
        name: 'Contact',
        url: '/#contact',
        icon: <Send />
    },
]