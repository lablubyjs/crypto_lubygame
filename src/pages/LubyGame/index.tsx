import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Categories, Loading, Logo, Waiting} from '@components';

import {useAppSelector} from '@hooks';

import {convertLubyCoinToNumber, convertNumberToLubyCoin} from '@shared/utils';

import {Container, Text, theme} from '@shared/styles';

import * as S from './styles';

const LubyGame: React.FC = () => {
    const [currentBalance, setCurrentBalance] = useState<string>('0');
    const [waitingTransaction, setWaitingTransaction] = useState(false);

    const questions = useAppSelector((state) => state.questions.list);
    const categories = questions.categories;
    const lubyGameContract = useAppSelector(
        (state) => state.connection.lubyGameContract
    );
    const accounts = useAppSelector((state) => state.connection.accounts);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchIndividualBalance = async () => {
            const result = await lubyGameContract.methods
                .getBalanceIndividual()
                .call();
            setCurrentBalance(convertLubyCoinToNumber(result));
        };
        fetchIndividualBalance();
    }, [lubyGameContract]);

    const categorieHandler = (name: string) => {
        if (+currentBalance === 0) {
            alert(
                'Você não possui luby coins suficientes! Inicie um jogo novamente'
            );
            navigate('/');
            return;
        }
        navigate(`${name}`);
    };

    const withdrawLubyCoins = async () => {
        if (+currentBalance === 0) {
            alert(
                'Você não possui luby coins suficientes! Inicie um jogo novamente'
            );
            navigate('/');
            return;
        }

        try {
            setWaitingTransaction(true);
            await lubyGameContract.methods.withdraw().send({from: accounts[0]});
            setWaitingTransaction(false);
            window.location.reload();
        } catch (error) {
            setWaitingTransaction(false);
            alert(
                'Falha ao realizar a transação! Por favor, verifique se você é dono do contrato ou possui Luby Coins suficientes para o saque.'
            );
            console.log(error);
        }
    };

    const claimBalanceLubyCoins = async () => {
        if (+currentBalance === 0) {
            alert(
                'Você não possui luby coins suficientes! Inicie um jogo novamente'
            );
            navigate('/');
            return;
        }

        try {
            const question = window.prompt(
                `O que é o que é: passa diante do sol e não faz sombra?\n\na. A sombra.\n\nb. O sol.\n\nc. A casa.\n\nd. O vento\n\n\nDigite sua resposta (apenas a letra):\n\n`
            );
            if (question?.toLowerCase() === 'd') {
                setWaitingTransaction(true);
                await lubyGameContract.methods
                    .claimBalance(convertNumberToLubyCoin(0))
                    .send({from: accounts[0]});
                setWaitingTransaction(false);
                window.location.reload();
            } else if (question === null) {
                return;
            } else {
                alert('Você errou, não será possível sacar com o bônus!');
            }
        } catch (error) {
            setWaitingTransaction(false);
            alert(
                'Falha ao realizar a transação! Por favor, verifique se você é dono do contrato ou possui Luby Coins suficientes para o saque.'
            );
            console.log(error);
        }
    };

    if (!lubyGameContract) {
        return <Loading />;
    }

    if (waitingTransaction) {
        return (
            <Waiting message="Aguardando transação, por favor, confirme em sua carteira Metamask" />
        );
    }

    return (
        <Container>
            <S.LubyGameContainer>
                <Logo isSmall={true} />
                <Text
                    fontSize={1.1}
                    fontWeight="700"
                    color={theme.colors.orange}
                >
                    O jogo é composto por perguntas e respostas, você poderá
                    startar e se arriscar no mundo de Play to Earn. No incício,
                    você tem 4 Luby Coins e a cada resposta você pode perder ou
                    ganhar 1 Luby Coin caso erre ou acerte a resposta. Também é
                    possível sacar seus Luby Coins ou sacar com um bônus de
                    Luby Coins (Sacar Com Bônus) se acertar uma pergunta surpresa.
                    Divirta-se!
                </Text>
                <Text fontSize={1.3} fontWeight="600" color={theme.colors.pink}>
                    Por favor, selecione a categoria que deseja jogar
                </Text>
                <Categories
                    categories={categories}
                    onCategorieHandler={categorieHandler}
                />
                <S.BalanceContainer>
                    <Text
                        fontSize={1.2}
                        fontWeight="600"
                        color={theme.colors.pink}
                    >
                        Saldo Atual
                    </Text>
                    <Text
                        fontSize={1.3}
                        fontWeight="400"
                        color={theme.colors.yellow}
                    >
                        <img src="/coin.png" alt="coin" /> {currentBalance} Luby
                        Coins
                    </Text>
                    <S.BalanceContainerButtons>
                        <Button
                            width={10}
                            height={2.3}
                            backgroundColor={theme.colors.orange}
                            borderRadius={50}
                            onClick={withdrawLubyCoins}
                        >
                            <Text
                                fontSize={1}
                                fontWeight="600"
                                color={theme.colors.white}
                            >
                                Sacar Luby Coins
                            </Text>
                        </Button>
                        <Button
                            width={10}
                            height={2.3}
                            backgroundColor={theme.colors.orange}
                            borderRadius={50}
                            onClick={claimBalanceLubyCoins}
                        >
                            <Text
                                fontSize={1}
                                fontWeight="600"
                                color={theme.colors.white}
                            >
                                Sacar Com Bônus
                            </Text>
                        </Button>
                    </S.BalanceContainerButtons>
                </S.BalanceContainer>
            </S.LubyGameContainer>
        </Container>
    );
};

export default LubyGame;
