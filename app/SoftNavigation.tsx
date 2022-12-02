'use client';

import { useRouter } from "next/navigation";

export default function SoftNavigation() {

    const router = useRouter();

    const navigate = () => {
        router.push("/dynamic-id");
    }

    return (
        <button onClick={navigate} style={{ color: "red" }}>
            Soft navigation via router (problem reproducible)
        </button>
    )
}