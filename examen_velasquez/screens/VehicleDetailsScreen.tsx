import { Text, View, StyleSheet } from "react-native"
import { FormInput } from "../components/FormInput"
import { Vehicle } from "../models/vehicle"
import { FromButton } from "../components/FromButton";


type VehicleDetailsScreenProps = {
  vehicle: Vehicle,
  onChange: (field: keyof Vehicle, value: string) => void;
  onNext: () => void
}

export const VehicleDetailsScreen = ({ vehicle, onChange, onNext }: VehicleDetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del vehículo</Text>
      <FormInput
        label="placa"
        value={vehicle.placa}
        onChangeText={value => onChange('placa', value)}
      />
      <FormInput
        label="nombre dueño"
        value={vehicle.nombreDueno}
        onChangeText={value => onChange('nombreDueno', value)}
      />
      <FormInput
        label="año"
        value={vehicle.ano}
        onChangeText={value => onChange('ano', value)}
      />
      <FormInput
        label="tipo de gasolina"
        value={vehicle.tipoGasolina}
        onChangeText={value => onChange('tipoGasolina', value)}
      />
      <FromButton label="continuar" onPress={onNext} />
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
 },
 title:{
  fontSize: 20,
  fontWeight: '600',
  marginBottom: 16,
 }
})
