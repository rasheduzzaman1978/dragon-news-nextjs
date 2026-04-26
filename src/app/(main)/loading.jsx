import React from 'react';

const LoadingPage = () => {
    return (
        <div className="h-[85vh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            
            {/* Spinner */}
            <span className="loading loading-dots loading-lg mb-4"></span>

            {/* Text */}
            <h2 className="text-2xl font-semibold tracking-wide animate-pulse">
                Loading, please wait...
            </h2>

            {/* Optional subtitle */}
            <p className="mt-2 text-sm opacity-80">
                Preparing your experience 🚀
            </p>

        </div>
    );
};

export default LoadingPage;