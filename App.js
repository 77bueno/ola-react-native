import { StatusBar, View, Text, SafeAreaView, Alert, Pressable } from "react-native";
import estilos from "./src/stylesheets/estilos";

export default function App() {
  function vai() {
    Alert.alert("Olá! ", "Fulano!");
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text style={estilos.titulo}> React Native </Text>
        </View>

        <View  style={estilos.conteudo}>
          <Text style={estilos.paragrafos}> Pontapé inicial para o desenvolvimento mobile </Text>
          <Text style={estilos.paragrafos}>
            React Native é um framework de desenvolvimento de aplicativos móveis que permite a criação de aplicativos nativos para iOS e Android utilizando JavaScript e React. Desenvolvido e mantido pelo Facebook, React Native tornou-se uma escolha popular entre os desenvolvedores devido à sua abordagem eficiente e flexível para o desenvolvimento de aplicativos móveis multiplataforma.
          </Text>
        </View>

        <View style={estilos.rodape}>
          <Text style={estilos.rodapeTexto}> Rodapé </Text>
          <Pressable style={estilos.botao} onPress={vai}>
            <Text style={estilos.rodapeTexto}>Clique aqui</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      
    </>
  )
}