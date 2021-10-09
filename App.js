import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

const App = () => {

  const modalizeRef = useRef(null);
  const openModalize = () => {
    modalizeRef.current?.open();
  }

   return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity 
            style={{backgroundColor: 'gray', padding: 8, borderRadius: 4, marginBottom: 10}}
            onPress={openModalize}
          ><Text style={{fontSize: 30}}>Show Modalize</Text>
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        snapPoint={300}
        modalHeight={500}
      >
        <View style={{flex: 1, height: 180, justifyContent: 'space-around', alignItems: 'center', margin: 10, marginTop: 30}}>
          <TouchableOpacity 
            style={{backgroundColor: '#736AFF', padding: 8, borderRadius: 4, marginBottom: 10}}
            onPress={() => {}}
          ><Text>Update</Text>
          </TouchableOpacity>
          <Text>UM TEXTO QUALQUER…</Text>
          <Text>“Um cidadão fez voto de desapego e pobreza. Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas, e saiu pelo mundo afora em busca de todos os sábios, medindo na verdade o desapego de cada um. Levava apenas uma tanga no corpo.
            Estava convencido de não encontrar quem ganhasse de si em despojamento, quando soube de um velho guru. Tomando as direções, parte ao encontro do velho sábio.
            Quando lá chegou, tristeza e decepção! Encontrou terras bem cuidadas, um palácio faustoso, muita riqueza, muita pompa. Indignado, procura pelo guru. Um velho servo lhe diz que ele está em uma ala dos magníficos jardins com seus discípulos, estudando desapego. Como era costume da casa Ter gentileza para com os hóspedes, o servo convida o andarilho para o banho, repouso e refeição, antes de se dirigir à presença do sábio.
            Achando tudo muito estranho, o desapegado aceita a sugestão. Toma um bom banho, lava sua tanga usada, coloca-a para secar no quarto e sai em busca do guru. Completamente injuriado, queria contestar e desmascarar aquele que julgava um impostor, pois em sua concepção desapego não combinava com posses. Aproxima-se do grupo, que ouve embevecido as palavras do mestre e fica ruminando um ardil para atacar o guru, quando, correndo feito um doido, chega um dos serviçais gritando:
            – Mestre, mestre, o palácio está pegando fogo, um incêndio tomou conta de tudo. O senhor está perdendo uma fortuna! O sábio, impassível, continua sua prédica. O desapegado viajante das Tangas dá um salto e sai em desabalada carreira, gritando:
            – Minha tanga, minha tanga, o fogo está destruindo minha tanga…”</Text>
            <Text>(Autor desconhecido)</Text>            
        </View> 
      </Modalize>

    </View>
  );
}
export default App;