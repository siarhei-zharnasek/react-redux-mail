const API_URL = 'http://localhost:3001/api/';

const postJSON = {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};
const putJSON = {
  method: "PUT",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const deleteJSON = {
  method: "DELETE",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    if (response.status === 401) {
      console.log('error 401', response);
    }
    console.log("API error", response);
    return response.json()
      .then((res) => Promise.reject(new Error(res.message)));
  }
}

export function encodeParams(obj, prefix) {
  const str = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      let k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];
      str.push(typeof v === 'object' ?
        encodeParams(v, k) :
        encodeURIComponent(k) + '=' + encodeURIComponent(v));
    }
  }
  return str.join('&');
}

export function fetchData(url) {
  return fetch(API_URL + url)
    .then(checkStatus)
    .then((response) => response.json())
    .then((json) => {
      console.log("GET Response Data for " + url, json);
      if (json.error) {
        let error = new Error(json.error);
        error.data = json.error.data;
        throw error;
      }
      return json.data;
    });
}