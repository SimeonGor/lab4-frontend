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
        let errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }
}

export async function register(username, password) {
    const response = await fetch(baseUrl + '/api/auth/register', {
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
        throw new Error(await response.text());
    }
}

export function getAuthHeader() {
    const currentUser = getCurrentUser();
    console.log(currentUser)
    return currentUser.token ? {'Authorization': 'Bearer ' + currentUser.token} : {};
}