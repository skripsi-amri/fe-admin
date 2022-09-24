import { api } from "../../../utils"

export const getAllGudang = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/gudang')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getGudang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/gudang/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahGudang = (data: {
    nama_Gudang: string,
    alamat: string
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/gudang', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editGudang = (id: string, data: {
    nama_Gudang: string,
    alamat: string
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/gudang/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusGudang = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/gudang/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}