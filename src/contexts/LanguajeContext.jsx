import React, { useEffect, useState } from "react";
import { dictionaryList } from "../data/dictionary";

export const LanguageContext = React.createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

const LanguageProvider = (props) => {
  const [userLanguage, setUserLanguage] = useState("en");
  const [dictionary, setDictionary] = useState(dictionaryList[userLanguage]);

  const changeLanguage = () => {
    const newLanguage = userLanguage === 'en'? 'es' : 'en'
    localStorage.setItem("rcml-lang", newLanguage)
    setUserLanguage(newLanguage);
    setDictionary(dictionaryList[newLanguage]);
    console.log("cambiando lenguaje...")
  };

  useEffect(() => {
      const defaultLanguage = localStorage.getItem("rcml-lang")

      if(defaultLanguage){
          setUserLanguage(defaultLanguage || 'en')
          setDictionary(dictionaryList[defaultLanguage] || dictionaryList.en)
      }

  }, [])

  return (
    <LanguageContext.Provider
      value={{ userLanguage, dictionary, changeLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
