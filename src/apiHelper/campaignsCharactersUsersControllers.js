export const getCampaignsCharactersUsersControllers = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campaignscharactersusers/", { method: "GET" })
        .then(response => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                console.log(response)
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then(responseJson => responseJson);
}

export const getCampaignsCharactersUsersById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campaignscharactersusers/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
}

export const postCampaignsCharactersUsers = async (campaignsCharactersUsers) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campaignscharactersusers/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(campaignsCharactersUsers)
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

export const updateCampaignsCharactersUsers = async (campaignsCharactersUsers) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campaignscharactersusers/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(campaignsCharactersUsers)
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
}

export const deleteCampaignsCharactersUsers = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campaignscharactersusers/?id=" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
}

export const getCampaignsCharactersUsersByCampaignId = async (campaignId) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campaignscharactersusers/searchcampaign/?campaignId=" + campaignId, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
}

export const getCampaignsCharactersUsersByCharacterId = async (characterId) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campaignscharactersusers/searchcharacter/?characterId=" + characterId, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
}

export const getCampaignsCharactersUsersByUserId = async (userId) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/campaignscharactersusers/searchuser/?userId=" + userId, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
}