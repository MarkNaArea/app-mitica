export const getAllGodGroups = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/godgroups/", { method: "GET" })
        .then(response => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar grupos de deuses");
            }
        })
        .then(responseJson => responseJson);
}

export const getGodGroupById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/godgroups/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar grupos de deuses");
            }
        })
        .then((responseJson) => responseJson);
}

export const postGodGroup = async (godGroup) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/godgroups/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(godGroup)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar grupos de deuses");
            }
        })
        .then((responseJson) => responseJson);
};

export const updateGodGroup = async (godGroup) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/godgroups/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(godGroup)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar grupos de deuses");
            }
        })
        .then((responseJson) => responseJson);
};

export const deleteGodGroup = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/godgroups/", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: id })
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar grupos de deuses");
            }
        })
        .then((responseJson) => responseJson);
};

