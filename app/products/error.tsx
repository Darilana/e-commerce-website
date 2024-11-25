'use client';

import { useEffect } from 'react';
import { AppButton } from '@/app/ui/AppButton';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-screen flex-col items-center justify-center">
            <h2 className="text-center">{error.message}</h2>
            <AppButton title="Try again" onClick={reset} />
        </main>
    );
}
