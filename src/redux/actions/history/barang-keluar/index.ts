import { api } from "../../../../utils"

export const getAllBarangKeluar = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/history/barang-keluar')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getBarangKeluar = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/history/barang-keluar/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahBarangKeluar = (data: {
    id_item: string,
    id_gudang: string,
    tanggal_masuk: Number
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/history/barang-keluar', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editBarangKeluar = (id: string, data: {
    id_item: string,
    id_gudang: string,
    tanggal_masuk: Number
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/history/barang-keluar/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusBarangKeluar = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/history/barang-keluar/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}