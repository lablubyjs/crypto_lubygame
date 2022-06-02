import React from 'react';

import Loading from '../Loading';

import {Text, theme} from '@shared/styles';

import * as S from './styles';

const Waiting: React.FC<any> = ({message}) => {
    return (
        <S.WaitingContainer>
            <Text fontSize={2} fontWeight="600" color={theme.colors.yellow}>
                {message}
            </Text>
            <Loading />
        </S.WaitingContainer>
    );
};

export default Waiting;
