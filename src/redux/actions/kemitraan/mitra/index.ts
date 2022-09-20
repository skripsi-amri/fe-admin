import { api } from "../../../../utils";

export const getAllMitra = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/mitra')
            .then((response: any) => {
                resolve(response)
            })
            .catch((error: any) => {
                reject(error)
            })
    })
}

export const getMitra = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get(`/mitra/${id}`)
            .then((response: any) => {
                resolve(response)
            })
            .catch((error: any) => {
                reject(error)
            })
    })
}

export const updateStatusMitra = (id: string, data: {
    status: boolean
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/mitra/status/${id}`, data)
            .then((response: any) => {
                resolve(response)
            })
            .catch((error: any) => {
                reject(error)
            })
    })
}

export const 
editDataMitra = (id: string, data: any) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/mitra/status/${id}`, data)
            .then((response: any) => {
                resolve(response)
            })
            .catch((error: any) => {
                reject(error)
            })
    })
}