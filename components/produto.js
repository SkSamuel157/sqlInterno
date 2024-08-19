import { Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function Produto({ data, onDelete, onSelect, selecionado }) {

    return (
        <Pressable 
            style={[styles.container, selecionado && styles.selecionado]} 
            onPress={onSelect}
        >
            <Text style={styles.text}>
                {data.quantidade} - {data.nome}
            </Text>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color="#ff6b6b" />
            </TouchableOpacity>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0", // Fundo claro para contraste
        padding: 16,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Sombra para Android
    },
    selecionado: {
        borderColor: "#4a90e2", // Cor azul para indicar seleção
        borderWidth: 2,
        backgroundColor: "#e8f4ff", // Fundo ligeiramente azul quando selecionado
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: "#333", // Cor do texto
        fontWeight: "500", // Peso da fonte para destaque
    },
});
