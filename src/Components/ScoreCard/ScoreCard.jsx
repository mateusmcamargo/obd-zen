import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const convertScore = (score, type) => {

    if (type === 'class') {
        if (score <= 60) {
            return 'bad';
        } else if (score <= 70) {
            return 'medium';
        } else if (score <= 85) {
            return 'good';
        } else {
            return 'great';
        }
    }

    if (type === 'title') {
        if (score <= 60) {
            return 'Ruim';
        } else if (score <= 70) {
            return 'OK';
        } else if (score <= 85) {
            return 'Bom';
        } else {
            return 'Ótimo';
        }
    }
    if (type === 'description') {
        if (score <= 60) {
            return 'Requer atenção urgente';
        } else if (score <= 70) {
            return 'Requer atenção';
        } else if (score <= 85) {
            return 'Poucos problemas detectados';
        } else {
            return 'Ótimo estado de conservação';
        }
    }

}

export default function ScoreCard({score}) {

    return (
        <div className='score-card'>
            <CircularProgressbar
                value={score}
                text={score}
                strokeWidth={5}
                styles={buildStyles({
                    textSize: 32,
                    textColor: "#F5F2F2",
                    pathColor: "#5e75f8",
                    trailColor: "#212834",
                })}
            />
            <h3 className={convertScore(score, 'class')}>{convertScore(score, 'title')}</h3>
            <p>{convertScore(score, 'description')}</p>
        </div>
    );
}