import Link from "next/link";
import React from 'react';
import HardNavigation from "./HardNavigation";
import SoftNavigation from "./SoftNavigation";

export default async function Page() {

    return (
        <div style={{ padding: 16 }}>
            <h1>Bug reproduction</h1>
            <div style={{ marginBottom: 8 }}>
                <Link style={{ color: "red" }} href={`/dynamic-id`}>{"Next.js Link (problem reproducible)"}</Link>
            </div>
            <div style={{ marginBottom: 8 }}>
                <SoftNavigation />
            </div>
            <div>
                <HardNavigation />
            </div>
        </div>
    )
}