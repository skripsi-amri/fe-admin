import { api } from '../../../../utils'

export const getAllBarang = () => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.get('/bbarang')
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

export const getBarang = (id: string) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.get('/bbarang/' + id)
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

export const tambahBarang = (data: {
    nama_item: string,
    id_merk: string,
    id_ukuran: string,
    stok: number,
}) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.post('/bbarang', data)
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

export const editBarang = (id: string, data: {
    nama_item: string,
    id_merk: string,
    id_ukuran: string,
    stok: number,
}) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.patch(`/bbarang/${id}`, data)
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

export const hapusBarang = (id: string) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.delete(`/bbarang/${id}`)
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