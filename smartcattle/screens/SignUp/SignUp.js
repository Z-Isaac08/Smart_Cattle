import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import layouts from "../../components/layouts";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SignUp = ({navigation}) => {
  return (
    <SafeAreaProvider style={{backgroundColor:'#fff'}}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Bebas Neue",
              letterSpacing: 12,
              textAlign: "center",
              color: "#2D6A4F",
            }}
          >
            Smartcattle
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Maven Pro",
              textAlign: "center",
              marginTop: 15,
            }}
          >
            Connectez-vous pour un suivi intelligent et en temps réel de vos
            bovins.
          </Text>
        </View>
        <View style={st.root}>
          //Les inputs
          <View style={st.input_group}>
            <Text style={st.text}>Identifiant</Text>
            <View style={st.input_container}>
              <TextInput
                secureTextEntry={false}
                placeholder="Entrez votre identifiant"
              />
            </View>
          </View>
          <View style={st.input_group}>
            <Text style={st.text}>Mot de passe</Text>
            <View style={st.input_container}>
              <TextInput secureTextEntry={true} />
            </View>
          </View>
          // le bouton connexion
          <TouchableOpacity style={st.button} onPress={() => navigation.navigate("Home")}>
            <Text style={[st.text, st.button_text]}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignUp;

const st = StyleSheet.create({
  root: {
    marginTop: 15,
    paddingHorizontal: layouts.paddingHorizontal,
    paddingVertical: layouts.paddingVertical,
    backgroundColor: layouts.bgColor,
  },
  input_container: {
    borderWidth: 1,
    borderColor: layouts.primary,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  imput: {
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: "Maven Pro",
  },

  button: {
    backgroundColor: layouts.primary,
    padding: 20,
    borderRadius: 8,
    marginTop: 40,
  },
  button_text: {
    textAlign: "center",
    color: "#fff",
  },
  input_group: {
    marginBottom: 10,
  },
});
