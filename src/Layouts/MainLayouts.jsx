import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';
import ScrollToTop from '../Component/ScrollToTop';

const MainLayouts = () => {

    const navigation = useNavigation();

    return (
        <div>
            {
                navigation.state === "loading" && <Loading />
            }
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;

// #006838
// #40b93c

// https://i.ibb.co/ppDpRDj/money-Plant.png
// https://i.ibb.co/Y7XcvF6r/Bonsai.jpg
// https://i.ibb.co/wZJKymfg/Bamboo-Palm.jpg
// https://i.ibb.co/4RWK0Yk7/snake-Plant.png
// https://i.ibb.co/390yCpZ5/peach-Lily.png
// https://i.ibb.co/0y3fX89G/Hibiscus.jpg
// https://i.ibb.co/LdQMcmwr/bsoton-fern.jpg
// https://i.ibb.co/1Jn4Z5x8/Aloe-vera.jpg