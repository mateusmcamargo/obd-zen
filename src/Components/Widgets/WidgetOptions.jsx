import { WidgetBlockTitle } from "./Blocks/WidgetBlockTitle";
import { WidgetBlockFooter } from "./Blocks/WidgetBlockFooter";
import './widgets.css';
import { WidgetBlockScoreCard } from "./Blocks/WidgetBlockScoreCard";

export function WidgetOptions() {
    return (
        <section className='widget options'>
            <WidgetBlockTitle
                titleText='Menu Rápido'
                titleDescription='Funções adicionais'
                infoIcon='fa-solid fa-compass'
            />

            <WidgetBlockScoreCard
                score={84}
            />

            <WidgetBlockFooter
                infoTitle='Melhor que'
                infoContent='75% dos carros'
                buttonText='Ver Sugestões'
            />
        </section>
    )
}