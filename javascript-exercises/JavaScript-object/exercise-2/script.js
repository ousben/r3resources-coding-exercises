function deleteObjectProperty(object, keyParameter) {
  let resultObj = {};
  for(let i = 0; i < Object.keys(object).length; i++) {
    if(Object.keys(object)[i] != keyParameter) {
      resultObj[Object.keys(object)[i]] = Object.values(object)[i];
    }
  }
  return resultObj;
}