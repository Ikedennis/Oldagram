const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectEl1 = document.getElementById("sect-el1");



renderArr(posts);

function renderArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const head2 = document.createElement("div");
    head2.classList.add("head2", "margin");
    head2.id = `head2-el-${i}`;

    const avatar = document.createElement("img");
    avatar.classList.add("round-avatar");
    avatar.src = arr[i].avatar;
    head2.appendChild(avatar);

    const userDetails = document.createElement("div");
    userDetails.classList.add("user-details");
    const name = document.createElement("h3");
    name.textContent = arr[i].name;
    const location = document.createElement("p");
    location.textContent = arr[i].location;
    userDetails.appendChild(name);
    userDetails.appendChild(location);
    head2.appendChild(userDetails);

    const postDiv = document.createElement("div");
    const postEl = document.createElement("img");
    postEl.classList.add("post");
    postEl.id = `post-el-${i}`;
    postEl.src = arr[i].post;

    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");
    const heartIcon = document.createElement("img");
    heartIcon.id = `heart-el-${i}`;
    heartIcon.src = "images/icon-heart.png";
    const commentIcon = document.createElement("img");
    commentIcon.src = "images/icon-comment.png";
    const dmIcon = document.createElement("img");
    dmIcon.src = "images/icon-dm.png";
    iconsDiv.appendChild(heartIcon);
    iconsDiv.appendChild(commentIcon);
    iconsDiv.appendChild(dmIcon);

    const marginDiv = document.createElement("div");
    marginDiv.classList.add("margin");
    const h3El = document.createElement("h3");
    h3El.id = `h3-el-${i}`;
    let click = 0;

    const p = document.createElement("p");
    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("bold");
    usernameSpan.textContent = arr[i].username;
    p.appendChild(usernameSpan);
    p.appendChild(document.createTextNode(` ${arr[i].comment}`));

    marginDiv.appendChild(h3El);
    marginDiv.appendChild(p);

    postDiv.appendChild(postEl);
    postDiv.appendChild(iconsDiv);
    postDiv.appendChild(marginDiv);

    sectEl1.appendChild(head2);
    sectEl1.appendChild(postDiv);

    postEl.addEventListener("dblclick", function () {
      h3El.textContent = `${click += 1} likes`;
    });
    
    heartIcon.addEventListener("click", function () {
      h3El.textContent = `${click += 1} likes`;
    });
  }
}
