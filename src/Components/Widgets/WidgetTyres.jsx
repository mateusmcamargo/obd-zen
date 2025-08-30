import { WidgetBlockFooter } from "./Blocks/WidgetBlockFooter";
import { WidgetBlockTitle } from "./Blocks/WidgetBlockTitle";
import { WidgetBlockTyre } from "./Blocks/WidgetBlockTyre";
import './widgets.css';

export function WidgetTyres() {
    return (
        <section className='widget tyres'>
            <WidgetBlockTitle
                titleIcon='fa-solid fa-gauge-high'
                titleText='Pneus'
            />

            <div className='tyres'>
                <WidgetBlockTyre
                    tyreName='Diant. Esq.'
                    tyrePressure={33}
                    tyreTemp={58}
                />
                <WidgetBlockTyre
                    tyreName='Diant. Dir.'
                    tyrePressure={38}
                    tyreTemp={63}
                />
                <WidgetBlockTyre
                    tyreName='Tras. Esq.'
                    tyrePressure={35}
                    tyreTemp={61}
                />
                <WidgetBlockTyre
                    tyreName='Tras. Dir.'
                    tyrePressure={31}
                    tyreTemp={56}
                />
            </div>

            <WidgetBlockFooter
                infoTitle='Pressão ideal'
                infoContent='32 PSI'
                buttonText='Fazer Leitura'
            />
        </section>
    )
}