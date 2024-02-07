import { StatusBar, View, Text, SafeAreaView, Button, Alert, StyleSheet } from "react-native";

export default function App() {
  function vai() {
    Alert.alert("Olá! ", "Fulano!");
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text> Topo/Cabeçalho </Text>
        </View>

        <View  style={estilos.conteudo}>
          <Text> Conteúdo </Text>
        </View>

        <View style={estilos.rodape}>
          <Text> Rodapé </Text>
          <Button title="Toca aqui" color="darkblue" onPress={vai} />
        </View>
      </SafeAreaView>
      
    </>
  )
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#E4F7FF",
    flex: 1,
  },
  cabecalho: {
    backgroundColor: "#6BD3FF",
    flex: 0.5,

  }, 
  conteudo: {
    backgroundColor: "#51CBFF",
    flex: 4,

  }, 
  rodape: {
    backgroundColor: "#34C2FF",
    flex: 0.5,

  }

});