import { api } from "../../../../utils"

export const getAllBarangMasuk = () => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.get('/history/barang-masuk')
            .then(res => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                resolve(res)
            })
            .catch(err => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                reject(err)
            })
    })
}

export const getBarangMasuk = (id: string) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.get('/history/barang-masuk/' + id)
            .then(res => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                resolve(res)
            })
            .catch(err => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                reject(err)
            })
    })
}

export const tambahBarangMasuk = (data: {
    id_item: string,
    id_gudang: string,
    tanggal_masuk: Number
}) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.post('/history/barang-masuk', data)
            .then(res => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                resolve(res)
            })
            .catch(err => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                reject(err)
            })
    })
}

export const editBarangMasuk = (id: string, data: {
    id_item: string,
    id_gudang: string,
    tanggal_masuk: Number
}) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.patch(`/history/barang-masuk/${id}`, data)
            .then(res => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                resolve(res)
            })
            .catch(err => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                reject(err)
            })
    })
}

export const hapusBarangMasuk = (id: string) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.delete(`/history/barang-masuk/${id}`)
            .then(res => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                resolve(res)
            })
            .catch(err => {
                dispatch({
                    type: 'LOADING',
                    value: false
                });
                reject(err)
            })
    })
}