import { Text, View, StyleSheet } from "react-native"
import { Vehicle } from "../models/vehicle"
import { FromButton } from "../components/FromButton";


type SummaryScreenProps = {
  vehicle: Vehicle,
  onRegister: () => void
}

export const SummaryScreen = ({ vehicle, onRegister }: SummaryScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen de registro</Text>
      <View style={styles.summary}>
        <Text style={styles.label}>Marca: <Text style={styles.value}>{vehicle.marca}</Text></Text>
        <Text style={styles.label}>Modelo: <Text style={styles.value}>{vehicle.modelo}</Text></Text>
        <Text style={styles.label}>Placa: <Text style={styles.value}>{vehicle.placa}</Text></Text>
        <Text style={styles.label}>Nombre del dueño: <Text style={styles.value}>{vehicle.nombreDueno}</Text></Text>
        <Text style={styles.label}>Año: <Text style={styles.value}>{vehicle.ano}</Text></Text>
        <Text style={styles.label}>Tipo de gasolina: <Text style={styles.value}>{vehicle.tipoGasolina}</Text></Text>
      </View>
      <FromButton label="registrar" onPress={onRegister} />
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
 },
 summary:{
  flex: 1,
  gap: 12,
 },
 label:{
  fontSize: 16,
  fontWeight: '600',
  color: '#333',
 },
 value:{
  fontWeight: '400',
  color: '#666',
 }
})
