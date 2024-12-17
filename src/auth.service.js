import {baseUrl} from "@/env.js";

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("token") || "{}");
}

export function logout() {
    localStorage.removeItem('token');
}

export async function login(username, password) {
    const response = await fetch(baseUrl + '/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        let token = await response.json();
        console.log(token);
        localStorage.setItem("token", JSON.stringify(token));
        return token;
    } else {
        throw new Error("Invalid username or password");
    }
}

export function getAuthHeader() {
    const currentUser = getCurrentUser();
    console.log(currentUser)
    return currentUser.token ? {'Authorization': 'Bearer ' + currentUser.token} : {};
}