import { api } from '../../../../utils'

export const getAllKota = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/data/kota')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getKota = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/data/kota/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahKota = (data: {
    nama_Kota: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/data/kota', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editKota = (id: string, data: {
    nama_Kota: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/data/kota/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusKota = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/data/kota/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}