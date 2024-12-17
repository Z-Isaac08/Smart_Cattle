import React from "react";
import { Text, StyleSheet, View, Image, TextInput } from "react-native";
import layouts from "../../components/layouts";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Svg from "react-native-svg";

export default function Home() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
      <SafeAreaView>
        // Profile et cloche de notification
        <View style={sty.vue_premligne}>
          // Profil
          <View style={sty.profil}>
            <Image source={require("../../assets/profil.png")} />
            <Text style={sty.prof_name}>Jon Doue</Text>
          </View>
          // Cloche de notification
          <View style={sty.clocheNotif}>
            <Image source={require("../../assets/cloche.png")} />
          </View>
        </View>
        // Label Troupeau et champs de recherche
        <View style={sty.input_group}>
          <Text style={sty.label}>Mon Troupeau</Text>
          <View style={sty.input_container}>
            <TextInput
              secureTextEntry={false}
              placeholder="Entrez l'ID ou le nom de votre bête"
            />
          </View>
        </View>
        // Bêtes et leurs attributs en résumé
        <View style={sty.vue_exemplse_btes}>
          // Exemple 1 de bête
          <View style={sty.exemple1}>
            <Image
              source={require("../../assets/petitebete.jpg")}
              style={sty.petitebete}
            />
            <View style={sty.exemple1_infos}>
              <Text
                style={[
                  sty.exemple1_infos_text,
                  { fontWeight: "bold" },
                  { paddingLeft: 30 },
                ]}
              >
                SS644-01
              </Text>

              <Text style={sty.exemple1_infos_text}>Nom : Betty</Text>
              <Text style={sty.exemple1_infos_text}>Race : Zébu</Text>
              <Text style={sty.exemple1_infos_text}>Etat : Bon</Text>
            </View>
          </View>
          // Exemple 2 de bête
          <View style={sty.exemple1}>
            <Image
              source={require("../../assets/petitebete.jpg")}
              style={sty.petitebete}
            />
            <View style={sty.exemple1_infos}>
              <Text
                style={[
                  sty.exemple1_infos_text,
                  { fontWeight: "bold" },
                  { paddingLeft: 30 },
                ]}
              >
                SS644-01
              </Text>

              <Text style={sty.exemple1_infos_text}>Nom : Betty</Text>
              <Text style={sty.exemple1_infos_text}>Race : Zébu</Text>
              <Text style={sty.exemple1_infos_text}>Etat : Bon</Text>
            </View>
          </View>
          //Exemple 3 de bête
          <View style={sty.exemple1}>
            <Image
              source={require("../../assets/petitebete.jpg")}
              style={sty.petitebete}
            />
            <View style={sty.exemple1_infos}>
              <Text
                style={[
                  sty.exemple1_infos_text,
                  { fontWeight: "bold" },
                  { paddingLeft: 30 },
                ]}
              >
                SS644-01
              </Text>

              <Text style={sty.exemple1_infos_text}>Nom : Betty</Text>
              <Text style={sty.exemple1_infos_text}>Race : Zébu</Text>
              <Text style={sty.exemple1_infos_text}>Etat : Bon</Text>
            </View>
          </View>
        </View>
        // Le petit menu en bas
        <View>
            
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const sty = StyleSheet.create({
  vue_premligne: {
    flexDirection: "row",
  },
  profil: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 17,
  },
  prof_name: {
    paddingLeft: "10",
    paddingTop: "15",
    fontSize: "16",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  clocheNotif: {
    paddingLeft: "200",
    paddingTop: "30",
  },

  input_container: {
    borderWidth: 1,
    borderColor: layouts.secondary,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
    width: 350,
    height: 50,
  },
  input: {
    padding: 10,
  },

  label: {
    fontSize: 32,
    fontFamily: "Maven Pro",
    fontWeight: "bold",
    color: layouts.primary,
  },
  input_group: {
    marginTop: 10,
    marginLeft: 15,
  },

  vue_exemplse_btes: {
    marginLeft: 19,
    flexDirection: "column",
  },
  exemple1: {
    width: 350,
    height: 125,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: layouts.primary,
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 30,
  },

  petitebete: {
    marginTop: 16,
    marginLeft: 17,
  },

  exemple1_infos: {
    paddingTop: 12,
    paddingLeft: 50,
  },
  exemple1_infos_text: {
    fontSize: 20,
    fontFamily: "Maven Pro",
    paddingTop: 5,
  },
});
