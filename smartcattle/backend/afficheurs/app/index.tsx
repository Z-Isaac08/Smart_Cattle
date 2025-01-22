import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import io from 'socket.io-client';

const SERVER_URL = 'http://192.168.1.140:4002';

export default function App() {
  const [latestPrediction, setLatestPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState('Connexion...');

  useEffect(() => {
    const socket = io(SERVER_URL, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 20000,
    });

    socket.on('connect', () => {
      console.log('Connecté au serveur');
      setConnectionStatus('Connecté');
    });

    socket.on('connect_error', (error) => {
      console.error('Erreur de connexion:', error);
      setConnectionStatus('Erreur de connexion');
    });

    socket.on('disconnect', () => {
      console.log('Déconnecté du serveur');
      setConnectionStatus('Déconnecté');
    });

    socket.on('new_prediction', (data) => {
      console.log('Nouvelle prédiction reçue :', data);
      setLatestPrediction(data);
      setLoading(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prédictions en Temps Réel</Text>
      <Text style={styles.status}>Status: {connectionStatus}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : latestPrediction ? (
        <View style={styles.card}>
          <Text style={styles.dataText}>Prédiction : {latestPrediction.prediction}</Text>
          <Text style={styles.dataText}>Température : {latestPrediction.temperature}°C</Text>
          <Text style={styles.dataText}>BPM : {latestPrediction.bpm}</Text>
        </View>
      ) : (
        <Text style={styles.emptyText}>Aucune donnée disponible</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  status: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: '90%',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 16,
    color: '#495057',
    marginVertical: 5,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6c757d',
  },
});