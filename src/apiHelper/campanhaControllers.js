export const getCampanhas = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campanhas/", { method: "GET" })
        .then(response => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                console.log(response)
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then(responseJson => responseJson);
};

export const getCampanhaById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campanhas/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
};

export const postCampanha = async (campanha) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campanhas/", {
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
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
};
