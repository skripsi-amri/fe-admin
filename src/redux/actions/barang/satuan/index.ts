import { api } from '../../../../utils'

export const getAllSatuanBarang = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/satuan')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getSatuanBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/satuan/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahSatuanBarang = (data: {
    nama_satuan: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/barang/satuan', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editSatuanBarang = (id: string, data: {
    nama_satuan: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/barang/satuan/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusSatuanBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/barang/satuan/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}