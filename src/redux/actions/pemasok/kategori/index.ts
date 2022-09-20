import { api } from '../../../../utils'

export const getAllKategoriPemasok = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/pemasok/kategori')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getKategoriPemasok = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/pemasok/kategori/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahKategoriPemasok = (data: {
    nama_kategori_pemasok: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/pemasok/kategori', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editKategoriPemasok = (id: string, data: {
    nama_kategori_pemasok: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/pemasok/kategori/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusKategoriPemasok = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/pemasok/kategori/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}