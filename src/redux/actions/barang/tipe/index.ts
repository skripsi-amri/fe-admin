import { api } from '../../../../utils'

export const getAllTipeBarang = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/tipe')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getTipeBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/tipe/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahTipeBarang = (data: {
    nama_tipe: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/barang/tipe', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editTipeBarang = (id: string, data: {
    nama_tipe: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/barang/tipe/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusTipeBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/barang/tipe/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}