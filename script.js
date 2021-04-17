'use strict';
// GET REQUEST
const getPosts = () => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    .then(res => showOutput(res))
    .catch(err => {
      console.error(err.message);
    });
};

// POST REQUEST
const addPosts = () => {
  axios
    .post(`https://jsonplaceholder.typicode.com/posts`, {
      title: 'please consider donating a small sum to help pay💲',
      body:
        'If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated',
    })
    .then(res => showOutput(res))
    .catch(err => {
      console.error(err.message);
    });
};

// PUT/PATCH REQUEST
const updatePost = () => {
  axios
    //patch
    .put(`https://jsonplaceholder.typicode.com/posts/1`, {
      title: 'please consider donating a small sum to help pay💲',
      body:
        'for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated',
    })
    .then(res => showOutput(res))
    .catch(err => {
      console.error(err.message);
    });
};

// DELETE REQUEST
const removePost = () => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(res => showOutput(res))
    .catch(err => {
      console.error(err.message);
    });
};

// SIMULTANEOUS DATA
const getData = () => {
  axios
    .all([
      axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20`),
      axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`),
    ])
    .then(res => {
      // console.log('post',res[0])
      // console.log('todos',res[1])
      showOutput(res[1]);
    })
    //  .then(axios.spread((posts, todos)=>showOutput(todos)))
    .catch(err => {
      console.error(err.message);
    });
};

// Show output in browser
const showOutput = res => {
  document.querySelector('#response').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
};

// Event listeners
document.querySelector('#get').addEventListener('click', getPosts);
document.querySelector('#post').addEventListener('click', addPosts);
document.querySelector('#update').addEventListener('click', updatePost);
document.querySelector('#delete').addEventListener('click', removePost);
document.querySelector('#sim').addEventListener('click', getData);
