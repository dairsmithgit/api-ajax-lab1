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

    const url = child.data.url;

    const postAuthor = document.createElement("p");

    const postAwards = document.createElement("div");

    const top4Award = child.data.all_awardings.slice(0, 4);
    console.log(top4Award);

    // for (let medal of top4Award) {
    //     const award = document.createElement("img");
    //     award.setAttribute("src", medal.icon_url);
    //     postAwards.appendChild(award);
    //     postDiv.appendChild(postAwards);
    // }

    parentEl.appendChild(postDiv);

    postAuthor.innerText = child.data.author;
    postDiv.appendChild(postAuthor);

    postTitle.innerText = child.data.title;
    postDiv.appendChild(postTitle);

    if (child.data.thumbnail === "default") {
        thumbnail.remove();
    } else {
        thumbnail.setAttribute("src", child.data.thumbnail);
        postDiv.appendChild(thumbnail);
    }

    postLink.setAttribute("href", url);
    postLink.innerText = "See this post on Reddit."
    postDiv.appendChild(postLink);


}
});