import { useLoaderData } from "react-router";
import Recent from "../Component/Recent";
import HomeSlider from "../Component/HomeSlider";
import About from "../Component/About";
import Faq from '../Component/Faq';
import { Suspense, useEffect } from "react";
import Loading from "../Component/Loading";
import Testimonial from "../Component/Testimonial";
import CTA from '../Component/CTA';


const Home = () => {
    useEffect(() => {
        document.title = "Plenture";
    }, [])

    const testimonialData = fetch('/testimonial.json').then(res => res.json());
    const faqData = fetch('/faq.json').then(res => res.json());

    const plants = useLoaderData();

    return (
        <div className="w-full md:w-11/12 mx-auto pb-10 md:px-0 px-4">
            <HomeSlider />
            <About />
            <h1 className="text-4xl font-bold text-center pt-24 pb-10">Recently Added Plants</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    plants.map(plant => <Recent key={plant._id} plant={plant} />)
                }
            </div>
            <Suspense fallback={<Loading />}>
                <Faq faqData={faqData}></Faq>
            </Suspense>
            <CTA />
            <div className='bg-[#f4f3f3] pb-14 w-full mx-auto'>
                <h1 className='text-4xl font-bold text-center pt-20 leading-14'>Client Experiences with QuickBill</h1>
                <Suspense fallback={<Loading />}>
                    <Testimonial testimonialData={testimonialData}></Testimonial>
                </Suspense>
            </div>
        </div>
    );
};

export default Home;