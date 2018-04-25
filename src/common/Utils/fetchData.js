import axios from 'axios';

export default function fetchData() {
  const promises = [axios.get('http://bonnylive.biz:1337/api/v1/'), axios.post('http://bonnylive.biz:1337/api/v1/'), axios.put('http://bonnylive.biz:1337/api/v1/')];
  return Promise.all(promises);
}