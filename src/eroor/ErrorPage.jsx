import React from 'react';
import { useNavigate, useRouteError } from 'react-router';
import { HiOutlineExclamationCircle, HiOutlineArrowLeft, HiOutlineHome } from 'react-icons/hi';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
            <div className="max-w-md w-full text-center">

                {/* Text Section */}
                <h1 className="text-6xl font-black text-[#0f2a3d] mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Something went wrong</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    {error?.statusText || error?.message || "The page you're looking for doesn't exist or has been moved."}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold shadow-sm hover:bg-gray-50 transition-all"
                    >
                        <HiOutlineArrowLeft />
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1a4336] text-white rounded-xl font-semibold shadow-md hover:bg-[#143329] transition-all"
                    >
                        <HiOutlineHome />
                        Back to Home
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;