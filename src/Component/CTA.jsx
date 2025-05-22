import { Link } from 'react-router';

const CTA = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center bg-no-repeat mt-14 py-20 px-5 md:px-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)),
          url('https://i.ibb.co/bgSWNx9f/pexels-minan1398-793012.jpg')`
      }}
    >

      <div className="relative z-10 w-full md:max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Grow Healthier Plants with Plenture
        </h2>
        <p className="text-base mb-8 text-white">
          Track watering schedules, monitor health, and never miss a care routine again. Join a community of mindful plant lovers using Plenture daily.
        </p>
        <Link to='/addPlant' className="btn bg-[#006838] hover:bg-[#40b93c] text-white px-8 py-4 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTA;