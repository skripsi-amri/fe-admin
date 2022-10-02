import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

type Data = {
    message: string
}
// tx = access_token

export default function handler(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const { token } = req.body;

    res.setHeader("Set-Cookie", [
        cookie.serialize('tx', token, {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
        }),
    ])
    res.status(200).json({ message: 'success' });
}