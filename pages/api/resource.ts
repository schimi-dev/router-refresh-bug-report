import { NextApiRequest, NextApiResponse } from "next";
import { updateResource } from "../../database";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<void>
) {
    await updateResource(req.body.name as string);
    res.status(201).end();
}
