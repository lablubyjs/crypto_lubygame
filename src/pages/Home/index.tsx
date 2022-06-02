import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Loading, Logo, Mascot, Waiting} from '@components';

import {useAppSelector} from '@hooks';

import {convertNumberToLubyCoin} from '@shared/utils';

import {Container, Text, theme} from '@shared/styles';

const Home: React.FC = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [waitingTransaction, setWaitingTransaction] = useState(false);
    const lubyGameContract = useAppSelector(
        (state) => state.connection.lubyGameContract
    );
    const accounts = useAppSelector((state) => state.connection.accounts);

    const navigate = useNavigate();

    const playHandler = async () => {
        const lubyCoins = convertNumberToLubyCoin(4);

        try {
            setIsDisabled(true);
            setWaitingTransaction(true);
            await lubyGameContract.methods
                .mintLbc(lubyCoins)
                .send({from: accounts[0]});
            await lubyGameContract.methods
                .approve(lubyCoins)
                .send({from: accounts[0]});
            await lubyGameContract.methods
                .startGame(lubyCoins)
                .send({from: accounts[0]});
            navigate('/lubygame');
        } catch (error) {
            alert(
                'Falha ao iniciar o jogo. Verifique o console para obter detalhes.'
            );
            console.log(error);
        }
    };

    if (waitingTransaction) {
        return (
            <Waiting message="Aguardando transação, por favor, confirme em sua carteira Metamask" />
        );
    }

    if (!lubyGameContract) {
        return <Loading />;
    }

    return (
        <Container>
            <Logo />
            <Button
                width={10}
                height={4}
                backgroundColor={theme.colors.pink}
                borderRadius={50}
                onClick={playHandler}
                disabled={isDisabled}
            >
                <Text
                    fontSize={2}
                    fontWeight="bold"
                    color={theme.colors.white}
                    fontFamily={theme.fonts.black_ops_one}
                >
                    Play
                </Text>
            </Button>
            <Mascot />
        </Container>
    );
};

export default Home;
