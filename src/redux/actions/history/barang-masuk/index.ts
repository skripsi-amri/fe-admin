import { api } from "../../../../utils"

export const getAllBarangMasuk = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/history/barang-masuk')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const getBarangMasuk = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/history/barang-masuk/' + id)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const tambahBarangMasuk = (data: {
    id_item: string,
    id_gudang: string,
    tanggal_masuk: Number
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/history/barang-masuk', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const editBarangMasuk = (id: string, data: {
    id_item: string,
    id_gudang: string,
    tanggal_masuk: Number
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/history/barang-masuk/${id}`, data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const hapusBarangMasuk = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/history/barang-masuk/${id}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}