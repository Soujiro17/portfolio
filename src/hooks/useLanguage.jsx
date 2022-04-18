import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguajeContext'

const useLanguage = () => {
    return useContext(LanguageContext)
}

export default useLanguage