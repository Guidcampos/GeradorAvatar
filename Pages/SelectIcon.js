import React from 'react'
import { SvgUri } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

const SelectIcon = () => {
  const navigation = useNavigation();

  const avatartipos = [
    { tipo: 'Adventurer', uri: "https://api.dicebear.com/9.x/adventurer/svg", seed: "Avery" },
    { tipo: 'Avataaars', uri: "https://api.dicebear.com/9.x/avataaars/svg", seed: "Jameson" },
    { tipo: 'Big Smile', uri: "https://api.dicebear.com/9.x/big-smile/svg", seed: "Avery" },
    { tipo: 'Dylan', uri: "https://api.dicebear.com/9.x/dylan/svg", seed: "James" },
    { tipo: 'Open Peeps', uri: "https://api.dicebear.com/9.x/open-peeps/svg", seed: "Sophia" },
    { tipo: 'Pixel Art', uri: "https://api.dicebear.com/9.x/pixel-art/svg", seed: "Leo" }

  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <Text style={styles.TextTitulo}>IconGenerator</Text>
        <Text style={styles.TextDesc}>O app perfeito para gerar icones e avatares aleatórios e divertidos de acordo com o seu nome</Text>


        <View style={styles.containerList}>
          <Text style={styles.TextDesc}>Selecione um tipo de avatar</Text>

          <FlatList
            name="list-options"
            data={avatartipos}
            keyExtractor={item => item.tipo}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => navigation.navigate('Avatar', { tipo: item.tipo, uri: item.uri, seed: item.seed })} style={styles.card}>
                <SvgUri width='60px' height="60px" uri={item.uri} />

                <Text style={styles.TextDesc}>{item.tipo}</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    alignContent: 'center',
    justifyContent: 'center',

    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#1F1F1F'
  },
  containerList: {
    flex: 2,
    gap: 15,
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#262626",

    gap: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextTitulo: {
    color: '#359DD2',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
  },
  TextDesc: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  TextAvatar: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 106,
    marginBottom: 14,
  },
})

export default SelectIcon
