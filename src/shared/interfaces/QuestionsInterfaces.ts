export interface IQuestionsResponse {
    categories: ICategories;
}

export interface ICategories {
    animals: ICategorie;
    math: ICategorie;
    sports: ICategorie;
    general_knowledge: ICategorie;
}

export interface ICategorie {
    id: number;
    name: string;
    color: string;
    questions: IQuestion[];
}

export interface IQuestion {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: number;
    feedback: string;
}
