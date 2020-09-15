import React from 'react';
import AnimatedNumberLib from 'react-animated-number';

function AnimatedNumber({value, defvalue, withComma, prefix}) {
    const numberWithComma = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="AnimatedNumber">
            <span className="inline">{prefix}</span>
            <AnimatedNumberLib component="text" value={value} default={defvalue}
                style={{
                    transition: '0.8s ease-out',
                    fontSize: 48,
                    transitionProperty:
                        'background-color, color, opacity'
                }}
                frameStyle={perc => (
                    perc === 100 ? {} : {opacity: '0.8'}
                )}
                duration={1000}
                formatValue={n => withComma ? numberWithComma(n) : parseInt(n)}/>
        </div>
    )
}

export default AnimatedNumber;
