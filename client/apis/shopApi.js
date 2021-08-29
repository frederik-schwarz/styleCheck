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
        return res.body
    })
}
export function getItem(id) {
    return request
    .get(serverUrl + '/singleItem/' + id)
    .then(res => res.json)
}


