import { api } from '../../../../utils'

export const getAllBank = () => (dispatch: any) => {
    console.log('get data')
    return new Promise((resolve, reject) => {
        api.get('/data/bank')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getBank = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/data/bank/' + id)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const tambahBank = (data: {
    nama_bank: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.post('/data/bank', data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const editBank = (id: string, data: {
    nama_bank: string,
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.patch(`/data/bank/${id}`, data)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const hapusBank = (id: string) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.delete(`/data/bank/${id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}