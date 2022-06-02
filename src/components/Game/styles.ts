import styled from 'styled-components';

interface IQuestionFormProps {
    color: string;
}

export const GameContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

export const QuestionForm = styled.form<IQuestionFormProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 50vw;
    gap: 1rem;
    padding: 1rem;
    background: ${({theme}) => theme.colors.white};
    border: 6px solid transparent;
    border-image: ${({color}) => `${color}`};
    border-image-slice: 1;
`;

export const Option = styled.div`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    :after {
        content: '';
        clear: both;
    }

    .radio {
        border: 1px solid #ccc;
        float: left;
        height: 2.5rem;
        position: relative;
        width: 100%;
    }

    .radio + .radio {
        margin-left: 25px;
    }

    .radio label {
        background: #fff no-repeat center center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        white-space: nowrap;
    }

    .radio label span {
        text-align: left;
        padding-left: 1.5rem;
        width: 100%;
        z-index: 1;
    }
    .radio label input[type='radio'] {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .radio label input[type='radio']:checked {
        background-color: ${({color}) => `${color}`};
    }
    .radio label input[type='radio']:checked + span {
        color: #ffffff;
    }
`;
