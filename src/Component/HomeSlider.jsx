import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

const HomeSlider = () => {
  return (
    <div className="w-full mx-auto h-screen">
      <Swiper
        modules={[Navigation, Parallax, Autoplay]}
        navigation
        parallax
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={1200}
        className="h-full"
        style={{ '--swiper-navigation-color': 'white' }}
      >
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src="https://i.ibb.co/VcBFCvJS/pexels-daniel-1055408.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/40"
              data-swiper-parallax="-200"
            >
              <div className='flex flex-col justify-center items-center'>
                <h1 className="text-4xl md:text-4xl font-bold text-center text-white">Your Green Companion for Plant Wellness</h1>
                <p className="text-lg medium w-[70%] text-center pt-5 text-white">Never miss a payment again. Monitor all your bills from electricity to tuition in one unified dashboard.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src="https://i.ibb.co/ZpqnB2k8/pexels-markusspiske-113335.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/40"
              data-swiper-parallax="-200"
            >
              <div className='flex flex-col justify-center items-center'>
                <h1 className="text-4xl md:text-4xl font-bold text-center text-white">Grow Better, Care Smarter</h1>
                <p className="text-lg medium w-[70%] text-center pt-5 text-white">Monitor, manage, and master your plant collection with ease.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src="https://i.ibb.co/FbM9FshL/pexels-cottonbro-4503273.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/40"
              data-swiper-parallax="-200"
            >
              <div className='flex flex-col justify-center items-center'>
                <h1 className="text-4xl md:text-4xl font-bold text-center text-white">Every Leaf Deserves Love</h1>
                <p className="text-lg medium w-[70%] text-center pt-5 text-white">Simplify your plant parenting with automated care tracking and tips.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;