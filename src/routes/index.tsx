import {Routes, Route} from 'react-router-dom';

import {Questions, Home, LubyGame} from '@pages';

const RoutesContainer: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lubygame" element={<LubyGame />} />
            <Route path="/lubygame/:categorie/*" element={<Questions />} />
        </Routes>
    );
};

export default RoutesContainer;
