import { api } from '../../../../utils'

export const getAllKlasifikasiPemasok = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/pemasok/klasifikasi')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getKlasifikasiPemasok = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/pemasok/klasifikasi/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahKlasifikasiPemasok = (data: {
    nama_klasifikasi_pemasok: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/pemasok/klasifikasi', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editKlasifikasiPemasok = (id: string, data: {
    nama_klasifikasi_pemasok: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/pemasok/klasifikasi/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusKlasifikasiPemasok = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/pemasok/klasifikasi/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}