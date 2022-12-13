'use client';

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { TResource } from "../../types";

const saveAction = async (data: TResource) => {
    return fetch("/api/resource", {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export default function EditResourceForm({ resource }: { resource: TResource | null }) {

    const router = useRouter();

    const [success, setSuccess] = useState(false);

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
        };
        const data = {
            name: target.name.value,
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
                    <label>
                        Name
                        <input style={{ display: "block" }} name="name" defaultValue={resource?.name || ""}></input>
                    </label>
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