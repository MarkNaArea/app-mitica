import { globalStyles } from "../../styles/global"

export const ListCampanhaItem = (props) => {
    const campanha = props.campanha

    return (
        <View style={globalStyles.card}>
            <View style={globalStyles.column}>
                <Text style={globalStyles.text}>Nome da Campanha: {campanha.name}</Text>
                <Text style={globalStyles.text}>Mestre: {campanha.gamemaster}</Text>
                <Text style={globalStyles.text}>Data de Início: {campanha.date}</Text>
            </View>
        </View>
    )
}