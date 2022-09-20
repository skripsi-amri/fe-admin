import { api } from '../../../../utils'

export const getAllEkspedisi = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/data/ekspedisi')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getEkspedisi = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/data/ekspedisi/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahEkspedisi = (data: {
    nama_ekspedisi: string,
    telepon: number,
    alamat: string
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/data/ekspedisi', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editEkspedisi = (id: string, data: {
    nama_ekspedisi: string,
    telepon: number,
    alamat: string
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/data/ekspedisi/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusEkspedisi = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/data/ekspedisi/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}