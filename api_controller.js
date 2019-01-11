const { products } = require('../react-practice-test-shop/src/db/yacht.json')

function apiController (query, res) {
  //   console.log(query)
  let productsArraySlice
  if (query._start && query._limit) {
    productsArraySlice = products.slice(
      query._start,
      query._start + query._limit
    )
  } else if (query.id) {
    productsArraySlice = [products[query.id - 1]]
  }
  //   console.log(`==============================  Sending data: \n`)
  //   console.log(productsArraySlice)
  //   console.log(`==============================================  \n`)
  const data = JSON.stringify(productsArraySlice)
  res.statusCode = 200
  res.setHeader('X-Total-Count', products.length)
  res.setHeader('Content-type', 'application/json')
  res.end(data)
}

exports.apiController = apiController
