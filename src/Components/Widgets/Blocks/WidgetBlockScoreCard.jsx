import ScoreCard from "../../ScoreCard/ScoreCard";

export function WidgetBlockScoreCard({score}) {
    return (
        <div className='widget-block score-card'>
            <ScoreCard
                score={score}
            />
        </div>
    );
}