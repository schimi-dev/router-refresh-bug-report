'use client';

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function HardNavigation() {

    const router = useRouter();

    const navigate = () => {
        startTransition(() => {
            router.push("/dynamic-id");
            router.refresh();
        })
    }

    return (
        <button onClick={navigate} style={{color:"green"}}>
            Hard navigation via router (works fine)
        </button>
    )
}