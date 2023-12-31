import { InputHTMLAttributes, MutableRefObject } from 'react';
import cn from 'classnames';

import type { FontWeight } from '../../ts/types';

import styles from './Input.module.scss';

type InputSize = 's' | 'm';

type Color = 'black' | 'dark-blue' | 'gray';

type OmitProps = 'size';

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, OmitProps> {
    size?: InputSize;
    color?: Color | 'white';
    refik: MutableRefObject<null>;
    placeholderColor?: Color;
    fontWeight?: FontWeight;
}

function Input({
    refik,
    disabled,
    size = 'm',
    color = 'white',
    placeholderColor = 'black',
    fontWeight = 'regular',
    className,
    ...props
}: InputProps) {
    const inputClassName = cn(
        disabled,
        className,
        styles.input,
        styles[`input--${size}`],
        styles[`input--color-${color}`],
        styles[`input--${fontWeight}`],
        styles[`input--placeholder-${placeholderColor}`]
    );
    return <input {...props} className={inputClassName} ref={refik} />;
}

export default Input;
