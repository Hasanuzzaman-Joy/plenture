import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FiSend } from "react-icons/fi";

const Contact = () => {
    useEffect(() => {
        document.title = "Plenture | Contact Us";
    }, []);

    const handleContactForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Optionally reset the form
        form.reset();

        // Show success toast
        toast.success("Message submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className="bg-[#FAFAF9] dark:bg-black w-full mx-auto py-10 px-4 md:px-0">
            <ToastContainer />

            <div className="w-full md:w-11/12 max-w-5xl mx-auto flex flex-col md:flex-row min-h-[600px] rounded-md overflow-hidden shadow-xl">
                {/* Left Column: Contact Form */}
                <div
                    className="flex flex-1 justify-center items-center bg-base-100 p-4 sm:p-8 dark:bg-[#0a0c13] dark:border-white dark:border"
                    style={{
                        boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                    }}
                >
                    <div className="w-full md:max-w-md">
                        <h2 className="mb-3 text-3xl font-bold">Get in Touch</h2>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            We'd love to hear from you. Please fill out the form below.
                        </p>

                        <form onSubmit={handleContactForm} className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-semibold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        placeholder="Your Name"
                                        className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40b93c]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40b93c]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-semibold">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5"
                                        placeholder="Write your message here..."
                                        className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40b93c] resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-2 font-semibold rounded-md bg-[#006838] hover:bg-[#40b93c] text-white border border-transparent hover:border-gray-300 text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Send Message
                                <FiSend />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="flex-1 hidden md:flex flex-col justify-center items-center px-10 bg-[#DFFFE1]">
                    <img
                        src="https://i.ibb.co/6cBHF4Kb/Mobile-login-bro.png"
                        alt="Contact Illustration"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
