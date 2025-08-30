import { useEffect, useState } from 'react';
import './floatingBar.css';

export function FloatingBar() {

    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
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
        <section
            className={`floating-bar ${visible ? 'visible' : ''}`}
        >
            <button className='help'>
                <i className='fa-solid fa-phone'/>
                Pedir Ajuda
            </button>

            <button className='more'>
                <i className='fa-solid fa-angles-up'/>
                Ações Rápidas
            </button>
        </section>
    );
}