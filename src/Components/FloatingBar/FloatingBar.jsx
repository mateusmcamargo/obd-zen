import { useEffect, useState } from 'react';
import './floatingBar.css';
import { WidgetBlockFooter } from '../Widgets/Blocks/WidgetBlockFooter';
import { WidgetBlockTitle } from '../Widgets/Blocks/WidgetBlockTitle';

export function FloatingBar() {

    const [visible, setVisible] = useState(true);

    const [expanded, setExpanded] = useState(false);

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
            className={`
                floating-bar ${visible  ? 'visible' : ''}
                             ${expanded ? 'expanded' : ''}
            }`}
        >
            
            {!expanded &&
                <>
                    <button className='help'>
                        <i className='fa-solid fa-phone'/>
                        Pedir Ajuda
                    </button>

                    <button className='more'>
                        <i className='fa-solid fa-angles-up'/>
                            Mais Opções
                    </button>
                </>
            }

            {expanded &&
                <section className='widget options'>
                    <WidgetBlockTitle
                        titleText='Menu Rápido'
                        titleDescription='lorem ipsun dolor sit amet'
                    />
                </section>
            }
        </section>
    );
}