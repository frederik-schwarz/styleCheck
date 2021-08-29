import request from 'superagent'

const rootUrl = '/api/v1/home'


export function getAllBasket() {
    return request
    .get(rootUrl + '/basket')
    .then(res => {
        return res.body
    })
}
export function deleteBasketItem(id) {
    return request
    .delete(rootUrl + '/basket/' + id)
    .then(res => {
        return res.body
    })
}
export function addBasket(item) {
    return request
    .post(rootUrl + '/basket')
    .send(item)
    .then(res => {
        return res.body
    })   
    .catch(err => {
        console.log(err.message)
    })
}