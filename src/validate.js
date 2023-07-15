
    const urlValid = (stringo)=>{
    let url;
    try {
      url = new URL(stringo);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
const getRandomInt = (min,max)=> {
  return Math.floor(Math.random() * (max-min+1)+min);
}
module.exports = { urlValid, getRandomInt }
  