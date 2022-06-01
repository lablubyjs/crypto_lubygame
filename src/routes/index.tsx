import {Routes, Route} from 'react-router-dom';

import {Home, LubyGame} from '@pages';

const RoutesContainer: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lubygame" element={<LubyGame />} />
        </Routes>
    );
};

export default RoutesContainer;