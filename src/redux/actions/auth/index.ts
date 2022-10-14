import { api } from "../../../utils";

export const LoginApi = (data: { username: string; password: string }) => (dispatch: any) => {
    return new Promise(async (resolve, reject) => {
        api.post(`/auth/masuk`, data)
            .then((response: any) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            });
    })
}

export const Me = () => (dispatch: any) => {
    return new Promise(async (resolve, reject) => {
        api.get(`/auth/profile`)
            .then((response: any) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            });
    })
}

export const LogoutApi = () => (dispatch: any) => {
    return new Promise(async (resolve, reject) => {
        api.delete(`/auth/keluar`)
            .then((response: any) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            });
    })
}

// refresh token belum