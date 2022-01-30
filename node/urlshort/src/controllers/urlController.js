/* eslint-disable no-extra-semi */
/* eslint-disable valid-jsdoc */
import env from '../config/env';
import db from '../service/generalService';
import url from '../models/url';

const {
  BASEURL
} = env;
const {
  add, find
} = db

function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

const UrlController = {
  async addUrl(root, {
    url,
  },{ req, models }) {
    if (!isValidURL(url)) throw new Error('this is not a url string');
    const check_url = await find(models.Url, { initial_url: url });
    if (check_url) throw new Error('this url already exists');
    let r = Math.random().toString(36).substring(4);
    console.log(r)
    const check_short = await find(models.Url, { url_short: r });
    if (check_short) throw new Error('this short already exists');
    const data = await add(models.Url, {
      initial_url: url,
      url_short: r,
    });
    // data.url_short = `${BASEURL}${r}`
    return data;
  },
  
  async getUrl(root, { url_short }, { req, models }) {
    const data = await find(models.Url, { url_short });
    if (!data) throw new Error('this short does not exist');
    return data;
  }

};

export default UrlController;
