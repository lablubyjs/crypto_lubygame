import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Button from '../Button';
import Mascot from '../Mascot';
import Loading from '../Loading';

import {GameProps} from '@shared/types';

import {theme, Text} from '@shared/styles';

import * as S from './styles';

const Game: React.FC<GameProps> = ({
    categorie,
    currentQuestion,
    onConfirmAnswer,
    setCurrentQuestion,
    feedback,
    questions,
    correctAnswers,
}) => {
    const [answer, setAnswer] = useState<number>();
    const navigate = useNavigate();

    const goBackHandler = () => {
        const confirmBack = window.confirm(
            'Você está no meio de um jogo. Deseja mesmo voltar?'
        );
        if (confirmBack) {
            navigate('/lubygame');
        }
    };

    if (!questions) {
        return <Loading />;
    }

    if (currentQuestion > questions.length - 1) {
        return (
            <S.GameContainer>
                <Text fontSize={3} fontWeight="600" color={categorie.color}>
                    O jogo acabou!
                </Text>
                <Text fontSize={2} fontWeight="600" color={categorie.color}>
                    Você acertou {correctAnswers} de {questions.length}{' '}
                    perguntas.
                </Text>
                <Button
                    width={13}
                    height={3}
                    backgroundColor={theme.colors.white}
                    borderColor={categorie.color}
                    borderWidth={2}
                    borderRadius={50}
                    onClick={() => navigate('/lubygame')}
                >
                    <Text fontSize={1} fontWeight="600" color={categorie.color}>
                        Jogar Novavente
                    </Text>
                </Button>
                <Mascot />
            </S.GameContainer>
        );
    }

    const confirmAnswerHandler = (event: any) => {
        event.preventDefault();
        if (answer === undefined) {
            alert('Por favor selecione uma resposta!');
            return;
        }
        onConfirmAnswer(answer!);
        setAnswer(undefined);
    };

    return (
        <S.GameContainer>
            <Text fontSize={2} fontWeight="600" color={categorie.color}>
                {categorie.name}
            </Text>
            <Text fontSize={1.5} fontWeight="400" color={categorie.color}>
                {currentQuestion + 1}/{questions.length}
            </Text>
            <S.QuestionForm
                onSubmit={confirmAnswerHandler}
                color={`radial-gradient(circle, ${theme.colors.lightYellow} 0%, ${categorie.color} 52%, ${theme.colors.orange} 100%)`}
            >
                <Text fontSize={1.3} fontWeight="600" color={categorie.color}>
                    {questions[currentQuestion].question}
                </Text>
                {!feedback &&
                    questions[currentQuestion].answers.map((answer, index) => (
                        <S.Option key={answer} color={categorie.color}>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={index}
                                        onChange={() => setAnswer(index)}
                                    />
                                    <span>{answer}</span>
                                </label>
                            </div>
                        </S.Option>
                    ))}
                {feedback && (
                    <>
                        <Text
                            fontSize={0.9}
                            fontWeight="400"
                            color={categorie.color}
                        >
                            {feedback}
                        </Text>
                        <Text
                            fontSize={0.9}
                            fontWeight="400"
                            color={categorie.color}
                        >
                            {questions[currentQuestion].feedback}
                        </Text>
                    </>
                )}
                {!feedback && (
                    <Button
                        width={10}
                        height={3}
                        backgroundColor={categorie.color}
                        borderRadius={50}
                    >
                        <Text
                            fontSize={1}
                            fontWeight="600"
                            color={theme.colors.white}
                        >
                            Confirmar Resposta
                        </Text>
                    </Button>
                )}
            </S.QuestionForm>
            {feedback && (
                <Button
                    width={10}
                    height={3}
                    backgroundColor={categorie.color}
                    borderRadius={50}
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                >
                    <Text
                        fontSize={1}
                        fontWeight="600"
                        color={theme.colors.white}
                    >
                        {currentQuestion === questions.length - 1
                            ? `Terminar Jogo`
                            : `Próxima Pergunta`}
                    </Text>
                </Button>
            )}
            {!feedback && currentQuestion < questions.length - 1 && (
                <Button
                    width={10}
                    height={3}
                    backgroundColor={theme.colors.white}
                    borderColor={categorie.color}
                    borderWidth={2}
                    borderRadius={50}
                    onClick={goBackHandler}
                >
                    <Text fontSize={1} fontWeight="600" color={categorie.color}>
                        Voltar para categorias
                    </Text>
                </Button>
            )}
        </S.GameContainer>
    );
};

export default Game;
