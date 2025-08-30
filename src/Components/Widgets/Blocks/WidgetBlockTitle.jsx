export function WidgetBlockTitle({
    titleText,
    titleDescription,
    titleIcon,
    infoIcon,
    infoDescription
}) {
    return (
        <div className='widget-block title'>
            <div className='title'>
                <div>
                    {titleIcon &&
                        <i className={titleIcon}/>
                    }
                    <h3>{titleText}</h3>
                </div>
                <h4>{titleDescription}</h4>
            </div>

            {infoIcon &&
                <div className='info'>
                    <i className={infoIcon}/>
                    <p>{infoDescription}</p>
                </div>
            }
        </div>
    );
}