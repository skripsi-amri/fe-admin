import { api } from '../../../../utils'

export const getAllKategoriHarga = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/harga')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getKategoriHarga = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/harga/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahKategoriHarga = (data: {
    nama_kategori_harga: string,
    persentase: number,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/barang/harga', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editKategoriHarga = (id: string, data: {
    nama_kategori_harga: string,
    persentase: number,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/barang/harga/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusKategoriHarga = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/barang/harga/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}