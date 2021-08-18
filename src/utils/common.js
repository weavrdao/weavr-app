function pathFromURL(url) {
  return url.replace(/(^\w+:|^)\/\//, '')
}

export {
  pathFromURL
}