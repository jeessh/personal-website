import React, {useState, useEffect} from "react";

function ScrollParallaxY() {
const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
}, []);
}

/* 

    parallax = styled.div`
        style= { transform: translateY($( offsetY * 0.5)px})}

    `

*/


export default ScrollParallaxY;