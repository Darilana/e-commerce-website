'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    console.log({ error });

    return (
        <main className="flex h-screen flex-col items-center justify-center">
            <h2 className="text-center">{error.message}</h2>
            <button
                className="mt-4 font-medium text-neutral-900 text-sm bg-white rounded-lg border-[1px] border-solid border-neutral-200 px-4 py-2.5 transition-colors focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                onClick={() => reset()}
            >
                Try again
            </button>
        </main>
    );
}
