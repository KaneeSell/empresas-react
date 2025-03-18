import { useEffect, useState } from "react"



export function useTheme(){
    const [themeDark, setThemeDark] = useState(() =>{
        return localStorage.getItem('theme') === 'dark';
    })

    useEffect(() => {
        document.body.setAttribute('data-bs-theme', themeDark? 'dark' : 'light')
        localStorage.setItem('theme', themeDark? 'dark' : 'light')
    },[themeDark])

    function alterarTema (){
        setThemeDark((prev) => !prev)
    }
    return { themeDark, alterarTema };
}