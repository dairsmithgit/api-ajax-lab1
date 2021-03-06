fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

// . (dot) for object properties
// [] (brackets) for array elements

const parentEl = document.getElementById("postParent");

for (let child of data.data.children) {
    const postDiv = document.createElement("div");

    const postTop = document.createElement("div");

    const postBody = document.createElement("div");

    const thumbnail = document.createElement("img");

    const postTitle = document.createElement("p");

    const postLink = document.createElement("a");

    const url = child.data.url;

    const postAuthor = document.createElement("p");

    const postAwards = document.createElement("div");

    const top4Award = child.data.all_awardings.slice(0, 4);
    console.log(top4Award);

    postDiv.classList.add("post");
    parentEl.appendChild(postDiv);

    postTop.classList.add("posthead");
    postDiv.appendChild(postTop);

    postBody.classList.add("postBody");
    postDiv.appendChild(postBody);

    postAuthor.innerText = "Posted by " + child.data.author;
    postAuthor.classList.add("author");
    postTop.appendChild(postAuthor);

    for (let medal of top4Award) {
        const award = document.createElement("img");
        award.setAttribute("src", medal.icon_url);
        postAwards.classList.add("awards");
        award.classList.add("award");
        postAwards.appendChild(award);
        postTop.appendChild(postAwards);
    }

    postTitle.innerText = child.data.title;
    postTitle.classList.add("title");
    postBody.appendChild(postTitle);

    if (child.data.thumbnail === "default") {
        thumbnail.remove();
    } else {
        thumbnail.setAttribute("src", child.data.thumbnail);
        thumbnail.classList.add("thumbnail");
        postBody.appendChild(thumbnail);
    }

    postLink.setAttribute("href", url);
    postLink.innerText = "See this post on Reddit."
    postLink.classList.add("link");
    postBody.appendChild(postLink);
}
});