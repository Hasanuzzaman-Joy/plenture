import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

const MainLayouts = () => {

    const navigation = useNavigation();

    return (
        <div>
            {
                navigation.state === "loading" && <Loading />
            }
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;

// #006838
// #40b93c