import styled from 'styled-components';

interface IButtonProps {
    width: number;
    height: number;
    backgroundColor: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
}

export const ButtonContainer = styled.button<IButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: ${({width}) => `${width}rem`};
    height: ${({height}) => `${height}rem`};
    border: ${({borderWidth, borderColor, backgroundColor}) =>
        borderColor && borderWidth
            ? `${borderWidth}px solid ${borderColor}`
            : `2px solid ${backgroundColor}`};
    background-color: ${({backgroundColor}) => backgroundColor};
    border-radius: ${({borderRadius}) => `${borderRadius}px`};
    transition: 0.5s;

    &:hover {
        opacity: 0.85;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
