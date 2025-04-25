import { Image, StyleSheet, Platform } from 'react-native';
import { View, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F3E5F5', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, Julia!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ color: '#333', fontWeight: '600' }}>
          Saldo disponível
        </ThemedText>
        <ThemedText type="title" style={{ color: '#820AD1', fontSize: 28 }}>
          R$ 5.320,75
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ fontWeight: '600', color: '#333' }}>
          Atalhos
        </ThemedText>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.chip, { marginRight: 12 }]}>
            <ThemedText style={{ color: '#fff' }}>Pix</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chip, { marginRight: 12 }]}>
            <ThemedText style={{ color: '#fff' }}>Transferir</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <ThemedText style={{ color: '#fff' }}>Pagar conta</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ fontWeight: '600', color: '#333' }}>
          Últimas transações
        </ThemedText>
        <ThemedText style={{ color: '#555' }}>• Mercado Livre - R$ 250,00</ThemedText>
        <ThemedText style={{ color: '#555' }}>• Spotify - R$ 19,90</ThemedText>
        <ThemedText style={{ color: '#555' }}>• Depósito - R$ 1.000,00</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 28,
    marginBottom: 12,
  },
  stepContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.01,
    shadowRadius: 8,
    elevation: 4,
  },
  chip: {
    backgroundColor: '#820AD1',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
