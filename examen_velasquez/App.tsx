import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { VehicleDataScreen } from './screens/VehicleDataScreen';
import { VehicleDetailsScreen } from './screens/VehicleDetailsScreen';
import { SummaryScreen } from './screens/SummaryScreen';
import { TOTAL_STEPS, useVehicleForm } from './state/useVehicleForm';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Vehicle } from './models/vehicle';
import { RegisteredVehiclesScreen } from './screens/RegisteredVehiclesScreen';

export default function App() {

  const { vehicle, updateField, step, nextStep, reset } = useVehicleForm();
  const [registeredVehicles, setRegisteredVehicles] = useState<Vehicle[]>([]);
  
  const handleRegister = () => {
    setRegisteredVehicles([...registeredVehicles, vehicle]);
    nextStep();
  };

  const handleRegisterAnother = () => {
    reset();
  };

  const renderScreen = () => {
    if (step === 0) {
      return <VehicleDataScreen vehicle={vehicle} onChange={updateField} onNext={nextStep} />
    }
    if (step === 1) {
      return <VehicleDetailsScreen vehicle={vehicle} onChange={updateField} onNext={nextStep} />
    }
    if (step === 2) {
      return <SummaryScreen vehicle={vehicle} onRegister={handleRegister}></SummaryScreen>
    }
    return <RegisteredVehiclesScreen vehicles={registeredVehicles} onRegisterAnother={handleRegisterAnother} />
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Registro de un vehículo</Text>
        {step < TOTAL_STEPS && <Text style={styles.steps}>Paso {step + 1} de {TOTAL_STEPS}</Text>}
        <View style={styles.card}>
          {renderScreen()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    padding: 24,
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  steps:{
    fontSize: 14,
    color: 'black',
  },
  card:{
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
  }
});
