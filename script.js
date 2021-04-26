fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// . (dot) for object properties
// [] (brackets) for array elements