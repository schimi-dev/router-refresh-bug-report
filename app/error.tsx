'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div style={{ padding: 16 }}>
            <div>
                <span>An error occurred.</span>
            </div>
            <button onClick={reset}>Try again</button>
        </div>
    );
}