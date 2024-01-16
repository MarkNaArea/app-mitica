export const getInvites = async () => {
    return fetch(process.env.BASE_URL + "/campaign_invites/", { method: "GET" })
        .then(response => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                console.log(response)
                throw new Error("Erro ao buscar convites");
            }
        })
        .then(responseJson => responseJson);
};

export const getInvitesByPlayerId = async (id) => {
    return fetch(process.env.BASE_URL + "/campaign_invites/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar convite");
            }
        })
        .then((responseJson) => responseJson);
};

export const postInvite = async (character) => {
    return fetch(process.env.BASE_URL + "/campaign_invites/", {
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
                throw new Error("Erro ao postar convites");
            }
        })
        .then((responseJson) => responseJson);
};
