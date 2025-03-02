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

const postContainer = document.getElementById("post-container-el");


let post = "";
for(let i = 0; i < posts.length; i++){
    post += 
        `<section class="user-info">
            <div class="container post-information">
            <img class="avatars user-avatar" src="${posts[i].avatar}" alt="profile pic of user on feed">
                <div class="name-location">
                    <h2 class="name">${posts[i].name}</h2>
                    <p class="location">${posts[i].location}</p>
                </div>
            </div>
        </section>

        <section class="post">
            <div class="container">
            <img class="picture-posted" src="${posts[i].post}" alt="user picture post"> 
            </div>
        </section>

        <section>
            <div class="container interactions">
                <div class="icon-images">
                    <img class="icons" src="/images/icon-heart.png" alt="like image">
                    <img class="icons" src="/images/icon-comment.png" alt="comment on image">
                    <img class="icons" src="/images/icon-dm.png" alt="send personal message">
                </div>
                <p class="likes">${posts[i].likes} likes</p>
                <p class="comment"><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        </section>`;
}

postContainer.innerHTML = post;