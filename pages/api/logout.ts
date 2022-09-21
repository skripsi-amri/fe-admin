import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from "cookie";

type Data = {
    message: string
}

export default function handler(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    res.setHeader("Set-Cookie", [
        cookie.serialize('tx', '', {
            httpOnly: true,
            path: '/',
            maxAge: 0,
        }),
        cookie.serialize('rtx', '', {
            httpOnly: true,
            path: '/',
            maxAge: 0,
        }),
    ]);
    return res.status(200).json({
        message: "Logout Berhasil",
    });
}