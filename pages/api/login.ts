import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

type Data = {
    message: string
}

export default function handler(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const { token, refreshToken } = req.body;

    res.setHeader("Set-Cookie", [
        cookie.serialize('tx', token, {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
        }),
        cookie.serialize('rtx', refreshToken, {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
        }),
    ])
    res.status(200).json({ message: 'success' });
}