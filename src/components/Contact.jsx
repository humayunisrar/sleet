import React, { useState } from 'react';
import styles from '../style';
import { contact } from '../assets';

const Contact = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        comments: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your API call here using the formData
        console.log('Form data:', formData);
    };

    return (
        <section id="contact" className={`${styles.paddingY} flex flex-col justify-center items-center gap-20`}>
            <div className='flex flex-col gap-2'>
                <h2 className={`${styles.header} text-center`}>Have some questions?</h2>
                <p className='text-magneta text-center text-[20px]'>Don't hesitate! We're Always here to guide you.</p>
            </div>

            <div className='flex flex-1 xs:flex-row flex-col gap-10'>
                <div className={`${styles.flexCenter} md:my-0 my-10 xs:h-[60vh] h-auto xs:w-2/3 w-full`}>
                    <img src={contact} alt="hero" className="xs:w-[90vh] w-full h-full object-contain" />
                </div>

                <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 xs:w-1/3 w-full gap-2`}>
                    <form className='w-full' onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-magenta text-lg mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="border border-black text-magenta border-opacity-50 rounded-full py-2 px-3 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="text-magenta text-lg mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="border border-black text-magenta border-opacity-50 rounded-full py-2 px-3 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-magenta text-lg mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border border-black text-magenta border-opacity-50 rounded-full py-2 px-3 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="comments" className="text-magenta text-lg mb-2">Comments</label>
                            <textarea
                                id="comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleInputChange}
                                className="border border-black text-magenta border-opacity-50 rounded-md py-2 px-3 w-full h-32"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-magenta w-full text-white rounded-full py-2 px-4 hover:bg-[#00C8BC]">
                            SEND
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
