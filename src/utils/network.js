const axios = require('axios')

const postRequest = (
  url,
  params,
  headers,
  data
) => new Promise((resolve, reject) => {
  axios.post(url, data, {
    maxContentLength: "Infinity", 
    params: params,
    headers: headers,
  })
  .then((res) => {
    console.log(res.data);
    resolve(res.data)
  })
  .catch((err) => {
    console.log(err)
    reject(err)
  })
})

/**
 * Gets the response for many requests with a timeout to each
 * @param {object} urlMap
 * @param {string} urlMap.key the actual URL to hit (e.g. https://resource/endpoint)
 * @param {string} urlMap.value the identifying value (e.g. https://resource)
 *
 * @param {number} timeout timeout for any request to be considered bad
 * @param {function} validationCheck a check invoked for each response.
 *  If invalid, the response is filtered out.
 *  (response: any) => boolean
 */
async function allRequests ({
  urlMap,
  timeout,
  validationCheck
}) {
  const urls = Object.keys(urlMap)
  const requests = urls.map(async (url) => {
    return new Promise((resolve) => {
      axios({
        method: 'get',
        timeout,
        url
      })
        .then(response => {
          const isValid = validationCheck(response)
          if (isValid) {
            resolve(urlMap[url])
          } else {
            resolve(null)
          }
        })
        .catch(() => {
          resolve(null)
        })
    })
  })
  const responses = (await Promise.all(requests)).filter(Boolean)
  return responses
}

function parseDataFromResponse (response) {
  if (!response || !response.data) return null

  let obj = response.data

  if (obj == null) return null
  if ((Array.isArray(obj) || typeof (obj) === 'string') && obj.length === 0) return null
  if (Object.keys(obj).length === 0) return null

  return obj
}

module.exports = {
  postRequest,
  allRequests,
  parseDataFromResponse,
}
