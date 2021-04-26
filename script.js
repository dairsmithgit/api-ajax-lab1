fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

// . (dot) for object properties
// [] (brackets) for array elements

const parentEl = document.getElementById("postParent");

for (let child of data.data.children) {
    const postDiv = document.createElement("div");
    const thumbnail = document.createElement("img");
    const postTitle = document.createElement("p");
    const postLink = document.createElement("a");
    var url = child.data.url;
    parentEl.appendChild(postDiv);
    postTitle.innerText = child.data.title;
    postDiv.appendChild(postTitle);
    if (child.data.thumbnail === "default") {
        thumbnail.remove();
    } else {
        thumbnail.setAttribute("src", child.data.thumbnail);
        postDiv.appendChild(thumbnail);
    }
    postLink.setAttribute("href", url);
    postLink.innerText = "See this post on Reddit.";
    postDiv.appendChild(postLink);
}
});