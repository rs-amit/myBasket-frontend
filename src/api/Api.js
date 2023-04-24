import axios from "axios"

const BASE_URL = "https://mybasket-server.jerryroy.repl.co/api"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

console.log("TOKEN", TOKEN)

export const PublicRequest =  axios.create({
    baseURL : BASE_URL
})

export const UserRequest =  axios.create({
    baseURL : BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})