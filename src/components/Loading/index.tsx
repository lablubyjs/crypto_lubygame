import ReactLoading from 'react-loading';

import {theme} from '@shared/styles';

import {LoadingContainer} from './styles';

const Loading = () => {
    return (
        <LoadingContainer>
            <ReactLoading
                type="spin"
                color={theme.colors.orange}
                height={25}
                width={50}
            />
        </LoadingContainer>
    );
};

export default Loading;
