import request from 'superagent'

const rootUrl = '/api/v1/home'
const serverUrl = '/'

// !!!!!!!!!!!!!!!!!!!!
//write api functions in this file full stack todo has good examples of this on github kotare
// !!!!!!!!!!!!!!!!!!!!


export function getAllSalesItems () {
    return request
    .get(rootUrl)
    .then(res => {
        console.log(res.body)
        return res.body
    })
}
export function getItem(id) {
    return request
    .get(serverUrl + '/singleItem/' + id)
    .then(res => res.json)
}

export function addBasket(item) {
    return request
    .post(rootUrl + '/basket')
    .send(item)
    .then(res => {
        console.log(res, 'this is the api')
        return res.body
    })   
    .catch(err => {
        console.log(err.message)
    })
}
