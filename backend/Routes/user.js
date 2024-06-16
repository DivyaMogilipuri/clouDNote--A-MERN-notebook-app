// data='{
//   "user": {
//     "id": "65d8c7c17359e11dbcd67d5d"
//   },
//   "iat": 1709347962
// }'
const json = '{"user": {"id": "65d8c7c17359e11dbcd67d5d"}, "iat": 1709347962}';

// Parse the JSON string
const jsonData = JSON.parse(json);

// Access the "id" field
const userId = jsonData.user.id;

console.log(typeof json);
