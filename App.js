import { StatusBar, View, Text, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  function vai() {
    Alert.alert("Olá! ", "Fulano!");
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="red" />
      <SafeAreaView>
        <View>
          <Text> Topo/Cabeçalho </Text>
        </View>

        <View>
          <Text> Conteúdo </Text>
        </View>

        <View>
          <Text> Rodapé </Text>
          <Button title="Toca aqui" color="red" onPress={vai} />
        </View>
      </SafeAreaView>
      
    </>
  )
}