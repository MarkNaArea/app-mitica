export const getRaces = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikiraces/", { method: "GET" })
        .then(response => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                console.log(response)
                throw new Error("Erro ao buscar raças");
            }
        })
        .then(responseJson => responseJson);
};

export const getRaceById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikiraces/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar raças");
            }
        })
        .then((responseJson) => responseJson);
};

export const postRace = async (skill) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikiraces/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(campanha)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar raças");
            }
        })
        .then((responseJson) => responseJson);
};
