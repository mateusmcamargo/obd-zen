import { WidgetBlockTitle } from "./Blocks/WidgetBlockTitle";
import { WidgetBlockFooter } from "./Blocks/WidgetBlockFooter";
import './widgets.css';
import { WidgetBlockReadings } from "./Blocks/WidgetBlockReadings";

export function WidgetDiagnosis() {
    return (
        <section className='widget diagnosis'>
            <WidgetBlockTitle
                titleIcon='fa-solid fa-circle-info'
                titleText='Diagnósticos ao vivo'
            />

            <div className='readings'>
                <WidgetBlockReadings
                    readingCode={'B0020'}
                    readingDate='2 horas atrás'
                />
                <WidgetBlockReadings
                    readingCode={'P0123'}
                    readingDate='1 hora atrás'
                />
                <WidgetBlockReadings
                    readingCode={'P0420'}
                    readingDate='1 dia atrás'
                />
                <WidgetBlockReadings
                    readingCode={'P0442'}
                    readingDate='4 minutos atrás'
                />
            </div>

            <WidgetBlockFooter
                infoTitle='Encontrados'
                infoContent='4 problemas'
                buttonText='Ver Soluções'
            />
        </section>
    )
}