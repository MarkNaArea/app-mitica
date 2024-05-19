export const getWikiClasses = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikiclasses/", { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Classes");
            }
        })
        .then((responseJson) => responseJson);
}

export const getWikiClassById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikiclasses/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Classes");
            }
        })
        .then((responseJson) => responseJson);
}

export const postWikiClass = async (wikiClass) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikiclasses/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wikiClass)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Classes");
            }
        })
        .then((responseJson) => responseJson);
};

export const patchWikiClass = async (id, wikiClass) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikiclasses/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wikiClass)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Classes");
            }
        })
        .then((responseJson) => responseJson);
};

export const deleteWikiClass = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/wikiclasses/" + id, {
        method: "DELETE"
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar Classes");
            }
        })
        .then((responseJson) => responseJson);
};

