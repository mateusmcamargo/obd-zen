import { useEffect, useState } from "react";

export function WidgetBlockReadings({readingCode, readingDate}) {

    const [title,       setTitle]       = useState('');
    const [description, setDescription] = useState('');
    const [icon,        setIcon]        = useState('');
    const [status,      setStatus]      = useState('');

    const translateStatus = (status) => {
        switch(status) {
            case 'low':
                return 'Baixo'
            case 'medium':
                return 'Neutro'
            case 'high':
                return 'Alto'
            case 'unknown':
                return 'Desconhecido'
        } 
    }

    const handleReading = (code) => {
        switch(code) {

            case 'P0420':
                setIcon('fa-solid fa-wrench');
                setTitle('Eficiência do Catalisador'); 
                setDescription('O catalisador pode não estar operando com eficiência total, afetando emissões e consumo de combustível.');
                setStatus('medium');
            break;

            case 'P0130':
                setIcon('fa-solid fa-gauge');
                setTitle('Circuito do Sensor de Oxigênio'); 
                setDescription('Problema no circuito do sensor de oxigênio, pode afetar a mistura ar/combustível.');
                setStatus('medium');
            break;

            case 'P0101':
                setIcon('fa-solid fa-fan');
                setTitle('Sensor de Fluxo de Ar (MAF)'); 
                setDescription('Leitura fora do esperado no sensor de fluxo de ar, possível sujeira ou defeito.');
                setStatus('medium');
            break;

            case 'P0300':
                setIcon('fa-solid fa-engine-warning');
                setTitle('Falha de Ignição no Motor'); 
                setDescription('Falha de ignição aleatória detectada em um ou mais cilindros.');
                setStatus('high');
            break;

            case 'P0325':
                setIcon('fa-solid fa-bolt');
                setTitle('Circuito do Sensor de Detonação'); 
                setDescription('Problema no sensor de detonação, pode afetar o desempenho do motor.');
                setStatus('medium');
            break;

            case 'P0442':
                setIcon('fa-solid fa-gas-pump');
                setTitle('Vazamento no Sistema EVAP'); 
                setDescription('Pequeno vazamento detectado no sistema de emissões evaporativas (EVAP).');
                setStatus('low');
            break;

            case 'P0700':
                setIcon('fa-solid fa-cogs');
                setTitle('Sistema de Controle da Transmissão'); 
                setDescription('Falha geral detectada no sistema de controle da transmissão.');
                setStatus('high');
            break;

            case 'B0020':
                setIcon('fa-solid fa-car-crash');
                setTitle('Falha no Sistema de Airbag'); 
                setDescription('Falha detectada no módulo do airbag ou sensor relacionado.');
                setStatus('high');
            break;

            case 'C0131':
                setIcon('fa-solid fa-car');
                setTitle('Circuito da Bomba Hidráulica do ABS'); 
                setDescription('Problema no circuito da bomba hidráulica do ABS.');
                setStatus('high');
            break;

            case 'U0100':
                setIcon('fa-solid fa-network-wired');
                setTitle('Perda de Comunicação com ECM/PCM'); 
                setDescription('Falha de comunicação com o módulo de controle do motor.');
                setStatus('high');
            break;

            default:
                setIcon('fa-solid fa-question');
                setTitle('Código desconhecido'); 
                setDescription('Não há informações disponíveis para este código.');
                setStatus('unknown');
            break;
        }
    };


    useEffect(() => {
        handleReading(readingCode);
    })

    return (
        <div className={`widget-block reading ${status}`}>
            <div className='icon'>
                <i className={`${icon} ${status}`}/>
            </div>
            <div className='content'>
                <div className='title'>
                    <h3>{title}</h3>
                    <span className={status}>{readingCode}</span>
                </div>
                <div className='description'>
                    {status === 'unknown' ? (
                        <p className={status}>
                            {description}
                            <button>Relatar</button>
                        </p>
                    ) : (
                        <p>{description}</p>
                    )}
                </div>
                <div className='status'>
                    <span className={status}>{translateStatus(status)}</span>
                    <p>
                        <i className='fa-solid fa-clock'/>
                        {readingDate}
                    </p>
                </div>
            </div>
        </div>
    );
}