import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    accessToken: any
    refreshToken: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { tx, rtx } = req.cookies;
    res.status(200).json({ accessToken: tx, refreshToken: rtx });
}