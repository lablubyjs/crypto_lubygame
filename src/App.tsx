import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {ThemeProvider} from 'styled-components';

import {useAppDispatch} from '@hooks';

import RoutesContainer from '@routes';

import {asyncAddQuestions} from '@store/questions-slice';
import {asyncFetchConnection} from '@store/connection-slice';

import {GlobalStyle, theme} from '@shared/styles';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(asyncAddQuestions());
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        const fetchConnection = async () => {
            await dispatch(asyncFetchConnection());
        };

        fetchConnection();
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />
                <RoutesContainer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
