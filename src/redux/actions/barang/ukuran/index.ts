import { api } from '../../../../utils'

export const getAllUkuranBarang = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/ukuran')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getUkuranBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/ukuran/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahUkuranBarang = (data: {
    nama_ukuran: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/barang/ukuran', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editUkuranBarang = (id: string, data: {
    nama_ukuran: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/barang/ukuran/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusUkuranBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/barang/ukuran/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}