export const getCharacter = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/characters/", { method: "GET" })
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

export const getCharacterById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/characters/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar personagem");
            }
        })
        .then((responseJson) => responseJson);
};

export const postCharacter = async (character) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/characters/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(character)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar personagens");
            }
        })
        .then((responseJson) => responseJson);
};
