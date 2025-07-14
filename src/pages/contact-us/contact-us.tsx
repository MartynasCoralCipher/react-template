export const ContactUs = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700">If you have any questions, feel free to reach out!</p>
            <form className="mt-6 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}