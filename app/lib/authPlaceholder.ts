let isLoggedIn = false;


export function fakeLogin(email: string, password: string):boolean {
    if(email === "vic@vic.com" && password === "123") {
        isLoggedIn = true;
        return true;
    }
    return false
}

export function logout() {
    isLoggedIn = false
}

export function getCurrentUser() {
    return isLoggedIn ? {name: "Victor"} : null
}