import styled from 'styled-components';

interface ILogoContainerProps  {
    isSmall?: boolean;
}

export const LogoContainer = styled.div<ILogoContainerProps>`
    @keyframes rotate {
        0% {
            transform: scaleX(-1);
        }
        30% {
            transform: scaleX(1);
        }
        50% {
            transform: scaleX(-1);
        }
        80% {
            transform: scaleX(1);
        }
        100% {
            transform: scaleX(-1);
        }
    }

    display: flex;
    align-items: center;
    flex-direction: ${({isSmall}) => isSmall ? `row`: `column`};
    gap: 1rem;
    cursor: pointer;

    img {
        max-width: ${({isSmall}) => isSmall ? `3rem`: `6rem`};
        animation: 3s rotate infinite;
    }
`;
