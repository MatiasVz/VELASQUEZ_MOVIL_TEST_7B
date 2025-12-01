import { StyleSheet, Text, View } from 'react-native'
import { Vehicle } from '../models/vehicle'
import { FormInput } from '../components/FormInput'
import { FromButton } from '../components/FromButton'

type VehicleDataScreenProps = {
  vehicle: Vehicle;
  onChange: (field: keyof Vehicle, value: string) => void;
  onNext: () => void;
}

export const VehicleDataScreen = ({ vehicle, onChange, onNext }: VehicleDataScreenProps) => {

  const isValid = vehicle.marca.trim() !== '' && vehicle.modelo.trim() !== '';

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Datos del vehículo</Text>
      <View style={styles.form}>
        <FormInput
          label="marca"
          value={vehicle.marca}
          onChangeText={(value) => onChange('marca', value)}
        />
        <FormInput
          label="modelo"
          value={vehicle.modelo}
          onChangeText={(value) => onChange('modelo', value)}
        />
      </View>
      <FromButton label="continuar" onPress={onNext} disabled={!isValid} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  form: {
    flex: 1,
    gap: 16,
  },
})
