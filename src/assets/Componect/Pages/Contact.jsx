import { useState } from "react";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, such as sending data to a backend server
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    return (
        <div className="bg-base-100 font-bold">
            <h1 className="text-5xl text-center lg:pt-8">Contact</h1>
            
                <div className="hero-content  justify-around  flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className="w-full" src="https://my-personal-site-c3e85.web.app/assets/contact1-FBpmdK5K.png" alt="Contact Image" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm bg-base-100">
                        <form className=" w-full mx-auto mt-8 p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
                            <div className="mb-6 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    placeholder="Your Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            

        </div>
    );
};

export default Contact;
