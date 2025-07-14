import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { setIsLoading, setText, resetStateValues } from '../../store/template-store/template.reducer';

export const Homepage = () => {
    const dispatch = useAppDispatch();
    const templateState = useAppSelector(state => state.template);

    useEffect(() => {
        // Reset state and start loading simulation
        dispatch(resetStateValues());
        dispatch(setIsLoading(true));
        dispatch(setText("Starting loading..."));

        // Simulate 3 seconds loading time
        const timer = setTimeout(() => {
            dispatch(setIsLoading(false));
            dispatch(setText("Loading done"));
        }, 3000);

        return () => clearTimeout(timer);
    }, [dispatch]);

    return (
        <div className="flex flex-col items-center bg-gray-100 p-8 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Welcome to the Homepage</h1>
            <p className="text-lg text-gray-700 mb-8">This is a simple homepage built with React, Vite, and Tailwind CSS.</p>
            
            {/* Template Store State Display */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Template Store State</h2>
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Is Loading:</span>
                        <span className={`px-2 py-1 rounded text-sm ${templateState.isLoading ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                            {templateState.isLoading ? 'True' : 'False'}
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Text:</span>
                        <span className="text-blue-600 font-mono">
                            {templateState.text || 'Empty'}
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Error:</span>
                        <span className={`font-mono ${templateState.error ? 'text-red-600' : 'text-gray-500'}`}>
                            {templateState.error || 'None'}
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Loading Failed:</span>
                        <span className={`px-2 py-1 rounded text-sm ${templateState.loadingFailed ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>
                            {templateState.loadingFailed ? 'True' : 'False'}
                        </span>
                    </div>
                </div>

                {/* Loading Indicator */}
                {templateState.isLoading && (
                    <div className="mt-4 flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                )}
            </div>
        </div>
    );
}