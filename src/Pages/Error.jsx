
import ErrorAnimations from '../Component/ErrorAnimations';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { useNavigation } from 'react-router';
import Loading from '../Component/Loading';

const Error = () => {

    const navigation = useNavigation();

    return (
        <>
            {
                navigation.state === "loading" && <Loading />
            }
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen p-2 bg-white text-center w-11/12 mx-auto">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold mt-4 text-gray-800">404 - Page Not Found</h1>
                    <p className="text-gray-600 mt-2">Oops! The page you’re looking for doesn’t exist.</p>
                    <ErrorAnimations />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Error;