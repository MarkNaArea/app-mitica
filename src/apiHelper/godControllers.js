export const getAllGods = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/gods/", { method: "GET" })
        .then(response => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                console.log(response)
                throw new Error("Erro ao buscar deuses");
            }
        })
        .then(responseJson => responseJson);
}

export const getGodById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/gods/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar deuses");
            }
        })
        .then((responseJson) => responseJson);
}

export const getGodsByGroupId = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/gods/search-group/?god_group_id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar deuses");
            }
        })
        .then((responseJson) => responseJson);
}

export const postGod = async (god) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/gods/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(god)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar deuses");
            }
        })
        .then((responseJson) => responseJson);
};

export const updateGod = async (god) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/gods/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(god)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar deuses");
            }
        })
        .then((responseJson) => responseJson);
};

export const deleteGod = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/gods/?id=" + id, {
        method: "DELETE"
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar deuses");
            }
        })
        .then((responseJson) => responseJson);
};