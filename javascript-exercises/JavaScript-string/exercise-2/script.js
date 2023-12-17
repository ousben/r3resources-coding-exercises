function isBlank(parameter) {
  if(typeof parameter === "string" && parameter === "") {
    return true;
  } else {
    return false;
  }
}