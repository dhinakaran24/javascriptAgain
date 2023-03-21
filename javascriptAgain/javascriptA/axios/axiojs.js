const apiUrl = "https://jsonplaceholder.typicode.com/users";

// axios
//   .get(apiUrl)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const data = {
//   name: "charukutty",
// };

// axios
//   .post(apiUrl, data)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//axios   with asyn function()

// const asyncFunc = async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// asyncFunc();

// const pop = async () => {
//   try {
//     const res = await axios.get(apiUrl);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// pop();

// const postValue = {
//   body: {
//     name: "dhinamalar",
//     hobby: "cricket",
//   },
// };

const headers = {
  body: {
    id: 1,
    name: "dhina Graham",
    username: "lol",
  },
};

const postData = async () => {
  try {
    const posting = await axios.post(apiUrl, headers);

    console.log(posting.data);
  } catch (error) {
    console.log(error.message);
  }
};
postData();

const removeItem = {
  body: {
    id: 1,
    name: "dhina Graham",
    username: "lol",
  },
};

const deleteing = async () => {
  try {
    const remove = await axios.delete(apiUrl, removeItem);
    console.log(remove);
  } catch (error) {
    console.log(error.message);
  }
};
deleteing();

const addTo = {
  body: {
    name: "loose pennae",
  },
};

const put = async () => {
  try {
    const updating = await axios.put(apiUrl, addTo);
    console.log(updating);
  } catch (error) {}
};
put();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sucess");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failure");
  }, 4000);
});

Promise.allSettled([p1, p2]).then(console.log()).catch(console.log());

let array = ["apple", "orange"];
let [a, b] = array;
console.log(a, b);

const enhan = (iphone, laptop, ios) => {
  return {
    iphone,
    laptop,
    ios,
  };
};

console.log(enhan("appple", "mac", "ipad"));

const apiLink = "https://jsonplaceholder.typicode.com/albums";

const display = async () => {
  try {
    const response = await axios.get(apiLink);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
display();

const posting = {
  headers: {
    title: "dhina loves charu",
  },
};

const postApi = async () => {
  try {
    const postApiData = await axios.put(apiLink, posting);
    console.log(postApiData.data);
  } catch (error) {
    console.log(error.message);
  }
};
postApi();
