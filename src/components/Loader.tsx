import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl loader-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl loader-pulse-delayed" />
            </div>

            {/* Main loader content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Spinning rings */}
                <div className="relative w-32 h-32 mb-8">
                    {/* Outer ring */}
                    <div className="absolute inset-0 border-4 border-blue-200 dark:border-blue-900 rounded-full" />

                    {/* Ring 1 - Animated */}
                    <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full loader-spin" />

                    {/* Ring 2 - Animated */}
                    <div className="absolute inset-2 border-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400 rounded-full loader-spin-reverse" />

                    {/* Center dot - Animated */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full loader-scale" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
