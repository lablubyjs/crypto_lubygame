import React from 'react';

import {CategoriesProps} from '@shared/types';

import {TextGradient, theme} from '@shared/styles';

import * as S from './styles';

const Categories: React.FC<CategoriesProps> = ({
    categories,
    onCategorieHandler,
}) => {
    if (!categories) {
        return <p>Loadig...</p>;
    }

    return (
        <S.CategoriesContainer>
            {Object.keys(categories).map((item: any) => (
                <S.CategorieItem
                    key={categories[item].id}
                    color={`radial-gradient(circle, ${theme.colors.lightYellow} 0%, ${categories[item].color} 52%, ${theme.colors.orange} 100%)`}
                    onClick={() => onCategorieHandler(item)}
                >
                    <TextGradient
                        fontSize={1.5}
                        fontWeight="regular"
                        fontFamily={theme.fonts.black_ops_one}
                        color={theme.colors.orange}
                        background={`radial-gradient(circle, rgba(214,28,78,1) 0%, rgba(231,79,55,1) 52%, rgba(250,194,19,1) 100%)`}
                    >
                        {categories[item].name}
                    </TextGradient>
                </S.CategorieItem>
            ))}
        </S.CategoriesContainer>
    );
};

export default Categories;
