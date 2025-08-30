import { useEffect, useState } from 'react';
import './navbar.css'

export function Navbar() {

    const [visible,     setVisible]     = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY && window.scrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY])

    return (
        <section className={`navbar ${visible ? 'visible' : ''}`}>
            <div className='branding'>
                <div className='logo'>
                    <i className='fa-solid fa-car'/>
                </div>
                <div className='text'>
                    <h1>OBD Zen</h1>
                    <h2>Gold</h2>
                </div>
            </div>

            <div className='actions'>
                <div className='connection'>
                    <i className='fa-brands fa-bluetooth-b'/>
                    <p>Conectado</p>
                </div>

                <div className='settings'>
                    <button>
                        <i className='fa-solid fa-gear'/>
                    </button>
                    <button>
                        <i className='fa-solid fa-bars'/>
                    </button>
                </div>
            </div>
        </section>
    );
}