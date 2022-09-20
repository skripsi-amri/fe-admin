import { api } from '../../../../utils'

export const getAllPemasok = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/ppemasok')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getPemasok = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/ppemasok/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahPemasok = (data: {
    nama_kategori_pemasok: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/ppemasok', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editPemasok = (id: string, data: {
    nama_kategori_pemasok: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/ppemasok/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusPemasok = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/ppemasok/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}