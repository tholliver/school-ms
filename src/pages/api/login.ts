import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    console.log('Here the data', req.body);

    res.status(200).json(req.body);
}
