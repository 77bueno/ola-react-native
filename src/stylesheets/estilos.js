import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#FFB3B3",
      flex: 1,
    },
    cabecalho: {
      backgroundColor: "#FF6666",
      flex: 0.3,
    }, 
    titulo: {
      fontSize: 35,
      fontWeight: "700",
      textAlign: "center",
      marginTop:  3,
    },
    paragrafos: {
      fontSize: 20
    },
    conteudo: {
      backgroundColor: "#fff",
      flex: 2.5,
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 4,
      marginTop: 4,
      padding: 10,
    }, 
    rodape: {
      backgroundColor: "#E64D4D",
      flex: 0.5, 
    },
    botao: {
      backgroundColor: '#C62424', 
      paddingVertical: 15,
      paddingHorizontal: 20,
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 5,
      alignItems: 'center',
    },
    rodapeTexto: {
      fontSize: 15,
      fontSize: 15,
      marginTop: 1,
      textAlign: "center"
    }
});

export default estilos;