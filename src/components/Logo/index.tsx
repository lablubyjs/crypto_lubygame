import React from 'react';
import {useNavigate} from 'react-router-dom';

import {TextGradient, theme} from '@shared/styles';

import * as S from './styles';

const Logo: React.FC<any> = ({isSmall}) => {
    const navigate = useNavigate();

    return (
        <S.LogoContainer isSmall={isSmall} onClick={() => navigate('/')}>
            <img src="/coin.png" alt="coin" />
            <TextGradient
                fontSize={isSmall ? 3 : 5}
                fontWeight="bold"
                color={theme.colors.orange}
                background={`radial-gradient(circle, rgba(214,28,78,1) 0%, rgba(231,79,55,1) 52%, rgba(250,194,19,1) 100%)`}
                fontFamily={theme.fonts.black_ops_one}
            >
                LUBYGAME
            </TextGradient>
        </S.LogoContainer>
    );
};

export default Logo;
