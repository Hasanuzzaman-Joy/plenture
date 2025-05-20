import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;

// #006838
// #40b93c