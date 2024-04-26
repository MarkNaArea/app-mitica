export const getClasses = async () => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/class/", { method: "GET" })
        .then(response => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                console.log(response)
                throw new Error("Erro ao buscar classe");
            }
        })
        .then(responseJson => responseJson);
};

export const getClassById = async (id) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/class/search/?id=" + id, { method: "GET" })
        .then((response) => {
            if (response.status === 200 || response.status === 304) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar classe");
            }
        })
        .then((responseJson) => responseJson);
};

export const postClass = async (itemClass) => {
    return fetch(process.env.EXPO_PUBLIC_API_URL + "/class/", {
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
                throw new Error("Erro ao buscar classe");
            }
        })
        .then((responseJson) => responseJson);
};
