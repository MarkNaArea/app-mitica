import { storage } from "../localStorage/asyncStorage";

export const loginUser = async (username, password) => {
    console.log("Login");
    const userData = { username: username, password: password };

    return fetch(process.env.BASE_URL + "/auth/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then((response) => response.json())
        .then((response) => {
            storage.save({
                key: "loginToken", // Note: Do not use underscore("_") in key!
                data: {
                    token: response.token
                }
            });
            // Pra lembrar a forma de pegar a key
            // storage.load({key: "loginToken"}).then(response => console.log(response))
            console.log("Login bem sucedido");
            return true;
        });
};

export const registerUser = async (username, password) => {
    console.log("Registro");
    return fetch(process.env.BASE_URL + "/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then((response) => {
        console.log(response.status)
        if (response.status === 204) {
            // Colocar pra logar automaticamente em breve
            console.log("Registro bem sucedido");
            return true;
        } else if (response.status === 409) {
            alert(
                "O nome de usuário já existe. Por favor, escolha outro e tente novamente"
            );
        }
    })
};
