import { getCookie, setCookie } from "cookies-next";
import { useEffect, useMemo, useState } from "react";

export default function useTheme() {
    const cookieTheme: 'dark' | 'light' = useMemo(() => {

        const theme = getCookie('theme')
        if (theme !== 'dark' && theme !== 'light') return 'dark'
        else return theme

    }, [])
    const [theme, setCurrentTheme] = useState<'dark' | 'light'>(cookieTheme);


    function setTheme(theme: 'dark' | 'light') {
        if (typeof document !== 'undefined') {

            const root = document.getElementsByTagName('body')[0];

            setCookie('theme', theme);
            if (theme === 'dark') {
                root.classList.add('dark');

            } else {
                root.classList.remove('dark');


            }
            window.dispatchEvent(new CustomEvent("theme", { detail: { 'theme': theme } }));

        }

    }
    useEffect(() => {
        // Handler to call on window resize
        function themeChange(event: CustomEventInit) {
            setCurrentTheme(event.detail.theme)
            console.log("resize event: " + event.detail);
        }
        window.addEventListener("theme", themeChange);

        return () => {
            window.removeEventListener("theme", themeChange)
        }
    })
    return { theme, setTheme }

}
