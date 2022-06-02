import React from 'react';

import mascot from '@assets/robot.svg';
import coin from '@assets/coin.svg';

import * as S from './styles';

const Mascot: React.FC = () => {
    return (
        <S.MascotContainer>
            <S.CoinImage src={coin} />
            <S.MascotImage src={mascot} />
        </S.MascotContainer>
    );
};

export default Mascot;
