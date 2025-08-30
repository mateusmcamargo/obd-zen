import { WidgetBlockTitle } from "./Blocks/WidgetBlockTitle";
import { WidgetBlockFooter } from "./Blocks/WidgetBlockFooter";
import './widgets.css';
import ScoreCard from "../ScoreCard/ScoreCard";
import { WidgetBlockScoreCard } from "./Blocks/WidgetBlockScoreCard";

export function WidgetHealth() {
    return (
        <section className='widget health'>
            <WidgetBlockTitle
                titleText='Saúde do Veículo'
                titleDescription='Situação geral do sistema'
                infoIcon='fa-solid fa-arrow-trend-up'
                infoDescription='Subiu 4%'
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