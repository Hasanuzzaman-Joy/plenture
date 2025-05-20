import Lottie from 'lottie-react';
import notFoundAnimation from '../assets/notFoundAnimation.json';

const ErrorAnimations = () => {
    return (
        <div>
            <Lottie animationData={notFoundAnimation} loop={true} />
        </div>
    );
};

export default ErrorAnimations;