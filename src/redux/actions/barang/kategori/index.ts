import { api } from '../../../../utils'

export const getAllKategoriBarang = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/kategori')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getKategoriBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/kategori/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahKategoriBarang = (data: {
    nama_kategori_barang: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/barang/kategori', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editKategoriBarang = (id: string, data: {
    nama_kategori_barang: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/barang/kategori/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusKategoriBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/barang/kategori/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}