'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const saveAction = async (data: { name: string }) => {
    return fetch("/api/resource", {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export default function EditResourceForm({ resource }: { resource: { name: string } | null }) {

    const router = useRouter();

    const [success, setSuccess] = useState(false);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            name: (e.target.name.value as string),
        };

        await saveAction(data);
        setSuccess(true);
        router.refresh()
    }

    return (
        <div>
            <h1>Edit resource</h1>
            <div style={{ borderStyle: "solid", borderWidth: 1, padding: 16, marginBottom: 16 }}>
                <form onSubmit={onSubmit} >
                    <label htmlFor="name">Name</label>
                    <input style={{ display: "block" }} name="name" defaultValue={resource?.name || ""}></input>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
            <div style={{ padding: 16, backgroundColor: success ? "green" : "grey", color: "white" }}>
                {success ? "Success state" : "Initial state"}
            </div>
        </div >

    )
}