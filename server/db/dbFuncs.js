const connection = require('./connect')

//write your db funcs that are called from routes here
const getAllItems = (db = connection) => {
    return db('salesitems')
    .select()
    .catch(err => {
        console.log(err.message)
    })
}
const deleteLisitng = (id, db = connection)=> {
    return db('salesitems')
    .where('id', id)
    .delete()
}
const postNewListing = (item, db = connection) => {
    return db('salesitems')
    .insert(item)
    .catch(err => {
        err.message
    })
}
const updateSalesItems = (id, item, db = connection) => {
    console.log(id, item,'These are the db funcs')
    return db('salesitems')
    .where('id', id)
    .update(item)
}
const getAllBasket = (db = connection) => {
    return db('basket')
    .select()
    .catch(err => {
        console.log(err.message)
    })
}
const AddListingBasket = (item, db = connection) => {
    return db('basket')
    .insert(item)
    .catch(err => {
        err.message
    })
}
const deletefromBasket = (id, db = connection)=> {
    return db('basket')
    .where('id', id)
    .delete()
}




module.exports = {
   getAllItems,
   getAllBasket,
   deleteLisitng,
   postNewListing,
   AddListingBasket,
   deletefromBasket,
   updateSalesItems,

}