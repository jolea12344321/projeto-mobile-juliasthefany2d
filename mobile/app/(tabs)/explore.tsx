import { StyleSheet, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Serviços</ThemedText>
      </ThemedView>

      <Collapsible title="Pix">
        <ThemedText>Envie e receba dinheiro instantaneamente com Pix.</ThemedText>
      </Collapsible>

      <Collapsible title="Transferências">
        <ThemedText>Faça transferências para contas de outros bancos ou NuContas.</ThemedText>
      </Collapsible>

      <Collapsible title="Pagamentos">
        <ThemedText>Pague boletos, contas de consumo e tributos com facilidade.</ThemedText>
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
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
