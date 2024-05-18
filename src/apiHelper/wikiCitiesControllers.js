export const getWikiCities = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikicities/", { method: "GET" })
        .then(response => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                console.log(response)
                throw new Error("Erro ao buscar Cidades");
            }
        })
        .then(responseJson => responseJson);
}

export const getWikiCityById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikicities/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Cidades");
            }
        })
        .then((responseJson) => responseJson);
}

export const postWikiCity = async (wikiCity) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikicities/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wikiCity)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Cidades");
            }
        })
        .then((responseJson) => responseJson);
};

export const patchWikiCity = async (id, wikiCity) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikicities/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wikiCity)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Cidades");
            }
        })
        .then((responseJson) => responseJson);
};

export const deleteWikiCity = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikicities/" + id, {
        method: "DELETE"
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Cidades");
            }
        })
        .then((responseJson) => responseJson);
};