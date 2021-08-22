import request from 'superagent'

const rootUrl = '/api/v1/home'


export function getAllBasket() {
    return request
    .get(rootUrl + '/basket')
    .then(res => {
        return res.body
    })
}