import { api } from '../../../../utils'

export const getAllKecamatan = () => (dispatch: any) => {
    console.log('get data kecamatan')
    return new Promise((resolve, reject) => {
        api.get('/data/kecamatan')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getKecamatan = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/data/kecamatan/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahKecamatan = (data: {
    nama_Kecamatan: string,
    id_kota: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/data/kecamatan', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editKecamatan = (id: string, data: {
    nama_Kecamatan: string,
    id_kota: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/data/kecamatan/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusKecamatan = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/data/kecamatan/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}