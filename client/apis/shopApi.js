import request from 'superagent'

const rootUrl = '/api/v1/home'

// !!!!!!!!!!!!!!!!!!!!
//write api functions in this file full stack todo has good examples of this on github kotare
// !!!!!!!!!!!!!!!!!!!!


export function getAllSalesItems () {
    return request
    .get(rootUrl)
    .then(res => res.body)
}