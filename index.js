const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

const githubuser={
  "login": "Teletetra",
  "id": 116382282,
  "node_id": "U_kgDOBu_aSg",
  "avatar_url": "https://avatars.githubusercontent.com/u/116382282?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Teletetra",
  "html_url": "https://github.com/Teletetra",
  "followers_url": "https://api.github.com/users/Teletetra/followers",
  "following_url": "https://api.github.com/users/Teletetra/following{/other_user}",
  "gists_url": "https://api.github.com/users/Teletetra/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Teletetra/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Teletetra/subscriptions",
  "organizations_url": "https://api.github.com/users/Teletetra/orgs",
  "repos_url": "https://api.github.com/users/Teletetra/repos",
  "events_url": "https://api.github.com/users/Teletetra/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Teletetra/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 0,
  "following": 4,
  "created_at": "2022-10-21T18:02:02Z",
  "updated_at": "2024-06-20T13:05:48Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req,res)=>{
    res.send('gaurav_kumar')
})

app.get('/login',(req,res)=>{
    res.send('<h1>lets get into admin</h1>')
})

app.get('/githubuser',(req,res)=>{
  res.json(githubuser)
})

app.get('/mytube',(req,res)=>{
    res.send('<h1>mytube.com</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(` successful Example app listening on port ${port}`)
})