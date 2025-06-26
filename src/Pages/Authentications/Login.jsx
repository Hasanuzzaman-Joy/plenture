
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiLogIn } from "react-icons/fi";

const Login = () => {

    useEffect(() => {
        document.title = "Plenture | Login";
    }, [])

    const { googleSign, signIn, setErr, err } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const signGoogle = () => {
        googleSign()
            .then(() => {
                toast.success("You've successfully logged in to the website", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setTimeout(() => {
                    navigate(location.state || '/');
                }, 1500);
            })
            .catch(error => {
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }

    const signInForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setErr('')

        signIn(email, password).then(() => {
            toast.success("You've successfully logged in to the website", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setTimeout(() => {
                navigate(location.state || '/');
            }, 2000);
        })
            .catch(error => {
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-[#FAFAF9] dark:bg-black w-full mx-auto py-10 px-4 md:px-0">
            <ToastContainer />

            <div className="w-full md:w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row min-h-[600px] rounded-md overflow-hidden shadow-xl">
                {/* Left: Form */}
                <div className="flex flex-1 justify-center items-center bg-base-100 p-4 sm:p-8 dark:bg-[#0a0c13] dark:border-white dark:border"
                    style={{
                        boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                    }}>
                    <div className="w-full md:max-w-md">
                        <h2 className="mb-3 text-3xl font-bold">Welcome Back to Plenture</h2>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Your plant care journey continues here.
                        </p>

                        <div className="my-6 space-y-4">
                            <div
                                onClick={signGoogle}
                                className={"flex items-center justify-center w-full p-4 space-x-1 border rounded-md btn bg-[#006838] text-white hover:bg-transparent hover:text-[#333] text-base font-semibold cursor-pointer border-gray-300"}
                            >
                                <FcGoogle />
                                <p>Sign in with Google</p>
                            </div>
                        </div>

                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-600" />
                            <p className="px-3 dark:text-gray-600">OR</p>
                            <hr className="w-full dark:text-gray-600" />
                        </div>

                        <form onSubmit={signInForm} className="space-y-8">
                            <div className="space-y-4">
                                {err && <p className='text-sm text-red-600'>{err}</p>}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-semibold">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder="abc@gmail.com"
                                        className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40b93c]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="password" className="text-sm font-semibold">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            autoComplete="current-password"
                                            placeholder="*****"
                                            className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40b93c]"
                                        />
                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                            aria-label="Toggle password visibility"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-2 font-semibold rounded-md bg-[#006838] hover:bg-[#40b93c] text-white border border-transparent hover:border-gray-300 text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Login
                                <FiLogIn />
                            </button>

                            <div>
                                <p className='text-sm mt-7'>Don't have an account? <Link to='/register' className='text-[#40b93c] font-bold hover:underline'>Sign up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="flex-1 hidden md:flex flex-col justify-center items-center px-10 bg-[#DFFFE1]">
                    <img
                        src="https://i.ibb.co/6cBHF4Kb/Mobile-login-bro.png"
                        alt="Illustration"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;