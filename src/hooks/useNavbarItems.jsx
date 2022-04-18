import House from '../components/Icons/House'
import Folder from '../components/Icons/Folder'
import Award from '../components/Icons/Award'
import Info from '../components/Icons/Info'
import Send from '../components/Icons/Send'
import useLanguage from './useLanguage'
import SpainFlag from '../components/Icons/SpainFlag'
import UKFlag from '../components/Icons/UKFlag'

const useNavbarItems = () => {

    const { dictionary, changeLanguage, userLanguage } = useLanguage()
    
    return([{
        name: dictionary.NavbarHome,
        url: '/',
        icon: <House />
    },
    {
        name: dictionary.NavbarProjects,
        url: '/#projects',
        icon: <Folder />
    },
    {
        name: dictionary.NavbarSkills,
        url: '/#skills',
        icon: <Award />
    },
    {
        name: dictionary.NavbarAboutMe,
        url: '/#about-me',
        icon: <Info />
    },
    {
        name: dictionary.NavbarContact,
        url: '/#contact',
        icon: <Send />
    },
    {
        name: dictionary.Language,
        url: '/#',
        icon: userLanguage === "en"? <UKFlag /> : <SpainFlag />,
        function: changeLanguage
    }])
}

export default useNavbarItems