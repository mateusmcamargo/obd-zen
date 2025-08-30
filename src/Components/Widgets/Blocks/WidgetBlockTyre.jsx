import { useEffect, useState } from "react";

export function WidgetBlockTyre({tyreName, tyrePressure, tyreTemp}) {

    const [status,     setStatus]     = useState('');
    const [tempStatus, setTempStatus] = useState('');
    const [presStatus, setPresStatus] = useState('');
    const [icon,   setIcon]   = useState('');

    const tempMin = 15;
    const tempMax = 60;

    const presMin = 28;
    const presMax = 35;

    function getInitials(string) {
        const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
        let initials = [...string.matchAll(rgx)] || [];
    
        initials = (
            (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
        ).toUpperCase();

        return initials;
    }

    const handlePresStatus = (tyrePressure) => {
        if (tyrePressure < presMin || tyrePressure > presMax) {
            setPresStatus('caution');
        } else {
            setPresStatus('great');
        }
    }

    const handleTempStatus = (tempStatus) => {
        if (tempStatus < tempMin || tempStatus > tempMax) {
            setTempStatus('caution');
        } else {
            setTempStatus('great');
        }
    }

    const handleStatus = (tyrePressure, tyreTemp) => {

        handlePresStatus(tyrePressure);
        handleTempStatus(tyreTemp);

        if (
            (tyrePressure < presMin || tyrePressure > presMax) ||
            (tyreTemp < tempMin || tyreTemp > tempMax)
        ) {
            setStatus('caution');
            setIcon('fa-solid fa-triangle-exclamation');
        } else {
            setStatus('great');
            setIcon('fa-solid fa-circle-check');
        }
    }

    useEffect(() => {
        handleStatus(tyrePressure, tyreTemp);
    })

    return (
        <div className={`widget-block tyre ${status}`}>
            <div className='name'>
                <p>{tyreName}</p>
                <i className={`${icon}`}/>
            </div>
            <div className='pressure'>
                <p>Pressão</p>
                <span className={presStatus}>{tyrePressure} PSI</span>
            </div>
            <div className='temperature'>
                <p>Temp</p>
                <span className={tempStatus}>{tyreTemp}°C</span>
            </div>
        </div>
    );
}