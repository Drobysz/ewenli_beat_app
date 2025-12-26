'use client'

import { useState, useEffect } from 'react';
import { TypewriterProps } from './TypeWriter.props';

export const Typewriter = ( {text, delay, infinite=false, className}: TypewriterProps)=> {
    const [ textValue, setTextValue ] = useState(' ');
    const [ index, setIndex ] = useState(0);

    useEffect(()=> {
        let timeout;

        if (index < text.length){
            timeout = setTimeout(() => {
                setTextValue( prevTextValue => prevTextValue + text[index] );
                setIndex( prevIndex => prevIndex + 1 );
            }, delay);
        } else if ( infinite ) {
            setTextValue(' ');
            setIndex(0);
        }
        
        return () => clearTimeout(timeout!);
    }, [text, index, delay, infinite]);

    useEffect(() => {
        setTextValue(' ');
        setIndex(0);
    }, [text]);

    return (
        <span className={className}>{textValue}</span>
    );
};