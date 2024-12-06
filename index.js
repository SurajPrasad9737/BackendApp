require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

const data = {
    "login": "SurajPrasad9737",
    "id": 154902135,
    "node_id": "U_kgDOCTuedw",
    "avatar_url": "https://avatars.githubusercontent.com/u/154902135?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SurajPrasad9737",
    "html_url": "https://github.com/SurajPrasad9737",
    "followers_url": "https://api.github.com/users/SurajPrasad9737/followers",
    "following_url": "https://api.github.com/users/SurajPrasad9737/following{/other_user}",
    "gists_url": "https://api.github.com/users/SurajPrasad9737/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SurajPrasad9737/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SurajPrasad9737/subscriptions",
    "organizations_url": "https://api.github.com/users/SurajPrasad9737/orgs",
    "repos_url": "https://api.github.com/users/SurajPrasad9737/repos",
    "events_url": "https://api.github.com/users/SurajPrasad9737/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SurajPrasad9737/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Suraj Prasad",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I am full stack web developer.💻",
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 0,
    "followers": 3,
    "following": 20,
    "created_at": "2023-12-26T14:35:50Z",
    "updated_at": "2024-11-25T03:37:57Z"
  };

app.get('/',(req,res)=>{
    res.send("hello guys....");
});

app.get('/twitter',(req,res)=>{
    res.send("surajkumartwitterdotcom");
})
app.get('/youtube',(req,res)=>{
    res.send("<h1>invoice mini crafts.</h1>")
})
app.get('/suraj',(req,res)=>{
res.send("<h1>My name is Suraj Kumar...</h1>");
})
app.get('/github',(req,res)=>{
    res.json(data);
})
app.listen(process.env.PORT,()=>{
    console.log(`app is listening on ${port}`);
})