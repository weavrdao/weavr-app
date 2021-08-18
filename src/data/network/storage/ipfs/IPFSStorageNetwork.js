const network = require('../../../../utils/network')
var FormData = require('form-data')
import StorageNetwork from '../storageNetwork'

const auth = process.env.INFURA_IPFS_PROJECT_ID + ':' + process.env.INFURA_IPFS_PROJECT_SECRET

class IPFSStorageNetwork extends StorageNetwork {
  constructor() {
    super()
  }

  addFile = (
    fileData
  ) => new Promise((resolve, reject) => {
    var formData = new FormData()
    var dataName = 'file'
    var dataValue = fileData
    formData.append(dataName, dataValue)
  
    const url = `https://ipfs.infura.io:5001/api/v0/add`
  
    let params = {
      pin: true
    }
  
    let headers = formData.getHeaders()
    headers['Authorization'] = `Basic ${auth}`
  
    let data = formData.getBuffer()
  
    network
      .postRequest(
        url, 
        params, 
        headers, 
        data
      )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
  
  getFile = (
    name
  ) => new Promise((resolve, reject) => {
    const url = `https://ipfs.infura.io:5001/api/v0/cat`
  
    let params = { 
      arg: name
    }
  
    let headers = { }
    headers['Authorization'] = `Basic ${auth}`
  
    let data =  { }
    network
      .postRequest(
        url, 
        params, 
        headers, 
        data
      )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })

  async getFiles(names) {
    console.log('Requesting files from IPFS')

    const url = `https://ipfs.infura.io:5001/api/v0/cat`
    
    let headers = { }
    //headers['Authorization'] = `Basic ${auth}`
  
    let data =  { }

    const requests = names.map(async name => {
      let params = { 
        arg: name
      }

      return new Promise((resolve) => {
        network
          .postRequest(
            url, 
            params, 
            headers, 
            data
          )
          .then(response => {
            resolve(response)
          })
          .catch((thrown) => {
            resolve(null)
          })
      })
    })
    
    const responses = (await Promise.all(requests)).filter(Boolean)
    
    return responses
  }
}

export default IPFSStorageNetwork