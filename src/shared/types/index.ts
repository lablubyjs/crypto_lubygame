import {ButtonHTMLAttributes, MouseEventHandler} from 'react';

import {ICategorie, IQuestion} from '@shared/interfaces';

export type ButtonProps = ButtonHTMLAttributes<any> & {
    width: number;
    height: number;
    backgroundColor: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

export type CategoriesProps = {
    categories: ICategorie[];
    onCategorieHandler: (name: string) => void;
};

export type GameProps = {
    categorie: ICategorie;
    questions: IQuestion[];
    currentQuestion: number;
    setCurrentQuestion: (question: number) => void;
    feedback?: string;
    correctAnswers?: number;
    onConfirmAnswer: (anwser: number) => void;
};
