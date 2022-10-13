import { api } from "../../../../utils"

export const getAllBarangKeluar = () => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.get('/history/barang-keluar')
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

export const getBarangKeluar = (id: string) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.get('/history/barang-keluar/' + id)
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

export const tambahBarangKeluar = (data: {
    id_item: string,
    id_gudang: string,
    tanggal_masuk: Number
}) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.post('/history/barang-keluar', data)
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

export const editBarangKeluar = (id: string, data: {
    id_item: string,
    id_gudang: string,
    tanggal_masuk: Number
}) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: 'LOADING',
            value: true
        });
        api.patch(`/history/barang-keluar/${id}`, data)
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

export const hapusBarangKeluar = (id: string) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.delete(`/history/barang-keluar/${id}`)
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