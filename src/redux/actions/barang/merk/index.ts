import { api } from '../../../../utils'

export const getAllMerkBarang = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/merk')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getMerkBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/barang/merk/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahMerkBarang = (data: {
    nama_merk: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/barang/merk', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editMerkBarang = (id: string, data: {
    nama_merk: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/barang/merk/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusMerkBarang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/barang/merk/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}