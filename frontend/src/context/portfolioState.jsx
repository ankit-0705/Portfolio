import PortfolioContext from "./portfolioContext";
import { useEffect, useState } from "react";

const PortfolioState = (props)=>{
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "myportfolioDark")

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme)
    },[theme]);

    const toggleTheme = ()=>{
        setTheme((prev)=>(prev=='myportfolioDark'?'myportfolioLight':'myportfolioDark'));
    };

    return(
        <PortfolioContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioState;