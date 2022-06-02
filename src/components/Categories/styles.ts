import {MouseEventHandler} from 'react';
import styled from 'styled-components';

interface ICategorieItemProps {
    color: string;
}

export const CategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;

    @media (max-width: 1000px) {
        grid-template-columns: auto;
    }
`;

export const CategorieItem = styled.div<ICategorieItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    height: 7rem;
    background: ${({theme}) => theme.colors.white};
    border: 6px solid transparent;
    border-image: ${({color}) => `${color}`};
    border-image-slice: 1;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);

        p {
            color: ${({color}) => color};
        }
    }
`;
