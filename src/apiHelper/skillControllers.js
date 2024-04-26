export const getSkills = async () => {
    console.log(process.env.EXPO_PUBLIC_API_URL)
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/skills/", { method: "GET" })
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

export const getSkillById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/skills/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar campanhas");
            }
        })
        .then((responseJson) => responseJson);
};

export const postSkill = async (skill) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/skills/", {
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
