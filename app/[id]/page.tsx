import Link from "next/link";
import { getResource } from "../../database";
import EditResourceForm from "./EditResourceForm";


export default async function Page({ params }: { params: { id: string } }) {

    const resource = await getResource(params.id);

    return (
        <div style={{ padding: 16 }}>
            <Link href={"/"}>Back</Link>
            <EditResourceForm resource={resource} />
        </div>
    )
}