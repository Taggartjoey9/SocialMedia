import { useState } from 'react'
import Icons from './Icons';


function getRandomIcon() {
    const icon = ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'];

    return icon[Math.floor(Math.random() * icon.length)];
}


export default function ShowSocial() {

    const [social, setSocial] = useState([]);

    const handleClick = () => {
        setSocial([...social, getRandomIcon()])
    }

    const renderedIcons = icon.map(( icon, index) => {
        return <Icons type={icon} key={index} />;
    }) 

    return(
        <div>
            <button onClick= {handleClick}>Add Icon</button>
            <div>{}</div>
        </div>

    )
}