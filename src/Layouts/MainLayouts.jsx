import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';
import ScrollToTop from '../Component/ScrollToTop';

const MainLayouts = () => {

    const navigation = useNavigation();

    return (
        <>
            {
                navigation.state === "loading" && <Loading />
            }
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayouts;

