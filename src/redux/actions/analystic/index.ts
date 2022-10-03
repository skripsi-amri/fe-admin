import { api } from "../../../utils"

export const getDataWidget = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        api.get('/analystic/widget')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}