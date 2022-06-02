import React from 'react';

import {ButtonProps} from '@shared/types';

import * as S from './styles';

const Button: React.FC<ButtonProps> = ({
    width,
    height,
    backgroundColor,
    children,
    ...rest
}) => {
    return (
        <S.ButtonContainer
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            {...rest}
        >
            {children}
        </S.ButtonContainer>
    );
};

export default Button;
