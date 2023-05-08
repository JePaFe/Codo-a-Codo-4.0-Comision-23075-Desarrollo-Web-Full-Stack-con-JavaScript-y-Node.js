// CRUD

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));

const createPost = async (post) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const readPosts = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=1"
    );
    const json = await res.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

const readPost = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await res.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

const updatePost = async (post, id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await res.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

// createPost({
//   title: "foo",
//   body: "bar",
//   userId: 1,
// }).then((json) => console.log(json));

// readPosts().then((json) => console.log(json));
// readPost(8).then((json) => console.log(json));

// const post = {
//   title: "foo 2",
//   body: "bar 2",
//   userId: 1,
// };

// updatePost(post, 1).then((json) => console.log(json));
// deletePost(1).then((json) => console.log(json));

readPosts().then((posts) => {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  main.innerHTML += `<h1>Posts</h1>`;

  posts.forEach((post) => {
    const html = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
    main.innerHTML += html;
  });

  body.appendChild(main);
});

// ---

axios
  .get("https://jsonplaceholder.typicode.com/posts?_page=1")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
