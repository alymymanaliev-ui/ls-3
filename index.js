

const BASE_URL = "http://194.187.122.34";

const resources = {
    menu: "/api/menu",
    login: "/api/login",
}

async function getMenu() {
    const response = await fetch(BASE_URL+resources.menu);
    const data = await response.json();
    console.log(data);
}

getMenu();