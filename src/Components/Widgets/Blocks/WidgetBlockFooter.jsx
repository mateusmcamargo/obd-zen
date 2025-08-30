export function WidgetBlockFooter({infoTitle, infoContent, buttonText}) {
    return (
        <div className='widget-block footer'>
            <div className='info'>
                <p>{infoTitle}</p>
                <span>{infoContent}</span>
            </div>

            <div className='actions'>
                <button>{buttonText}</button>
            </div>
        </div>
    );
}