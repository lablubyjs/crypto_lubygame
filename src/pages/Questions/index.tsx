import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Game, Loading, Logo, Waiting} from '@components';

import {useAppSelector} from '@hooks';

import {convertNumberToLubyCoin} from '@shared/utils';

import {Container} from '@shared/styles';

const Questions: React.FC = () => {
    const {categorie} = useParams();
    const [questions, setQuestions] = useState<any>();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState<string>();
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [waitingTransaction, setWaitingTransaction] = useState(false);

    const {categories} = useAppSelector((state) => state.questions.list);
    const isPending = useAppSelector((state) => state.questions.pending);
    const lubyGameContract = useAppSelector(
        (state) => state.connection.lubyGameContract
    );
    const accounts = useAppSelector((state) => state.connection.accounts);

    useEffect(() => {
        if (!isPending && categories) {
            setQuestions(categories[categorie!].questions);
        }
    }, [isPending, categories, categorie]);

    const confirmAnswer = async (answer: number) => {
        const lubyCoins = convertNumberToLubyCoin(1);
        setWaitingTransaction(true);

        if (questions[currentQuestion].correctAnswer === answer) {
            setFeedback('Certa Resposta!');
            setCorrectAnswers((prevState) => prevState + 1);
            await lubyGameContract.methods
                .correctAnswer(lubyCoins)
                .send({from: accounts[0]});
            setWaitingTransaction(false);
        } else {
            setFeedback(
                `Você Errou! A resposta correta é: ${
                    questions[currentQuestion].answers[
                        questions[currentQuestion].correctAnswer
                    ]
                }`
            );
            await lubyGameContract.methods
                .incorrectAnswer(lubyCoins)
                .send({from: accounts[0]});
            setWaitingTransaction(false);
        }
        setWaitingTransaction(false);
    };

    const nextQuestion = (question: number) => {
        if (currentQuestion > questions.length) {
            return <p>Fim de jogo...</p>;
        }

        setCurrentQuestion(question);
        setFeedback('');
    };

    if (isPending || (!questions && !categories)) {
        return <Loading />;
    }

    if (waitingTransaction) {
        return (
            <Waiting message="Aguardando transação, por favor, confirme em sua carteira Metamask" />
        );
    }

    return (
        <Container>
            <Logo isSmall={true} />
            <Game
                categorie={categories[categorie!]}
                questions={questions!}
                currentQuestion={currentQuestion}
                setCurrentQuestion={nextQuestion}
                onConfirmAnswer={confirmAnswer}
                feedback={feedback}
                correctAnswers={correctAnswers}
            />
        </Container>
    );
};

export default Questions;
