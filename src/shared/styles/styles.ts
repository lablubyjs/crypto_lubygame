import styled from 'styled-components';

interface ITextProps {
    fontSize: number;
    fontWeight: string;
    color?: string;
    fontFamily?: string;
    background?: string;
}

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
`;

export const Text = styled.p<ITextProps>`
    text-align: center;
    font-size: ${({fontSize}) => `${fontSize}rem`};
    font-weight: ${({fontWeight}) => `${fontWeight}`};
    font-family: ${({fontFamily}) =>
        fontFamily ? `${fontFamily}` : 'inherit'};
    color: ${({color}) => `${color}`};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const TextGradient = styled.p<ITextProps>`
    text-align: center;
    font-size: ${({fontSize}) => `${fontSize}rem`};
    font-weight: ${({fontWeight}) => `${fontWeight}`};
    font-family: ${({fontFamily}) =>
        fontFamily ? `${fontFamily}` : 'inherit'};
    color: ${({color}) => `${color}`};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-image: ${({background}) => `${background}`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
