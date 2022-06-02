import instance from '../axios.config';

import {IQuestionsResponse} from '@shared/interfaces';

import {IQuestions} from './interfaces';

const questionsServices = (): IQuestions => {
    async function listQuestions(): Promise<IQuestionsResponse> {
        return instance.get('/questions.json');
    }

    return {listQuestions};
};

export default questionsServices;
