import {IQuestionsResponse} from '@shared/interfaces';

export interface IQuestions {
    listQuestions: () => Promise<IQuestionsResponse>;
}
