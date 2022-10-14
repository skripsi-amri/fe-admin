import { api } from "../../../utils"

export const getAllGudang = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: 'LOADING',
            value: true
        });
        api.get('/gudang')
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

export const getGudang = (id: string) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.get('/gudang/' + id)
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

export const tambahGudang = (data: {
    nama_Gudang: string,
    alamat: string
}) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.post('/gudang', data)
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

export const editGudang = (id: string, data: {
    nama_Gudang: string,
    alamat: string
}) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.patch(`/gudang/${id}`, data)
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

export const hapusGudang = (id: string) => (dispatch: any) => {
    dispatch({
        type: 'LOADING',
        value: true
    });
    return new Promise((resolve, reject) => {
        api.delete(`/gudang/${id}`)
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