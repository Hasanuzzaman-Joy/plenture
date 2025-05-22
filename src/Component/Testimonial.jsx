import React, { use } from 'react';
import StarRatings from 'react-star-ratings';

const Testimonial = ({ testimonialData }) => {
    const testimonial = use(testimonialData);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto px-7 py-10">
            {
                testimonial.map(test => (
                    <div key={test.id} className="flex flex-col w-full max-w-lg p-1 mx-auto divide-y rounded-md shadow bg-white">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img
                                        src={test.avatar}
                                        alt={test.name}
                                        className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{test.name}</h4>
                                    <span className="text-xs dark:text-gray-600">{test.date}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-x-2 ">
                                <StarRatings
                                    rating={test.rating}               
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    starDimension="18px"
                                    starSpacing="1px"
                                    name="rating"
                                />
                                <div className="text-base font-bold">{test.rating}</div>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            {test.feedback.map((line, index) => (
                                <p key={index} className='text-base leading-6'>{line}</p>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Testimonial;