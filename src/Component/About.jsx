
const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-6 mt-7 md:mt-20'>
            <div>
                <h1 className='text-4xl font-bold mb-5'>About Us</h1>
                <p className='font-normal text-base leading-8'>
                    Plant Care Tracker is your green companion for nurturing happy, healthy houseplants. Whether you're a beginner or a seasoned plant parent, our platform helps you organize and track all your plant care routines in one beautiful dashboard. From watering schedules to fertilizing reminders, we've got your leafy friends covered.
                </p>
                <p className='font-normal text-base leading-8 pt-3'>
                    Here’s what Plant Care Tracker offers to help you succeed:
                </p>
                <ul className='list-disc list-inside font-normal leading-8 mb-3'>
                    <li>Customized reminders for watering, fertilizing, and other care tasks</li>
                    <li>Support for a wide variety of plant types including succulents, ferns, and bonsai</li>
                    <li>A clean, user-friendly dashboard to manage all your plants in one place</li>
                </ul>
                <p className='font-normal text-base leading-8'>
                    Join thousands of plant enthusiasts who trust Plant Care Tracker to keep their plants thriving. Let's cultivate a greener, healthier home together!
                </p>
            </div>
            <div>
                <img
                    src="https://i.ibb.co/BKVwdZYQ/aboutus.png"
                    alt="About Plant Care Tracker"
                    className='w-3/4 block mx-auto mt-4 md:mt-7 md:rounded-lg'
                />
            </div>
        </div>
    );
};

export default About;
