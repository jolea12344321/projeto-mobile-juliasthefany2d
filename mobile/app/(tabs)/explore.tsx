import { StyleSheet, Platform, Image } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/imagem.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Serviços</ThemedText>
      </ThemedView>

      <Collapsible title="Pix">
        <ThemedText>Envie e receba seus Pix.</ThemedText>
      </Collapsible>

      <Collapsible title="Transferências">
        <ThemedText>Faça transferências para contas de outros bancos.</ThemedText>
      </Collapsible>

      <Collapsible title="Pagamentos">
        <ThemedText>Pague boletos, e suas dívidas.</ThemedText>
      </Collapsible>

      <Collapsible title="Últimas transações">
        <ThemedText>• Mercado Livre - R$ 250,00</ThemedText>
        <ThemedText>• Spotify - R$ 19,90</ThemedText>
        <ThemedText>• Depósito - R$ 1.000,00</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    padding: 20,
  },
});
