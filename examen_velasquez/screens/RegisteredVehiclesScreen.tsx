import { Text, View, StyleSheet } from "react-native"
import { Vehicle } from "../models/vehicle"
import { FromButton } from "../components/FromButton";


type RegisteredVehiclesScreenProps = {
  vehicles: Vehicle[],
  onRegisterAnother: () => void
}

export const RegisteredVehiclesScreen = ({ vehicles, onRegisterAnother }: RegisteredVehiclesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehículos registrados</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>placa</Text>
          <Text style={styles.headerCell}>dueño</Text>
          <Text style={styles.headerCell}>marca</Text>
          <Text style={styles.headerCell}>modelo</Text>
        </View>
        {vehicles.map((vehicle, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.cell}>{vehicle.placa}</Text>
            <Text style={styles.cell}>{vehicle.nombreDueno}</Text>
            <Text style={styles.cell}>{vehicle.marca}</Text>
            <Text style={styles.cell}>{vehicle.modelo}</Text>
          </View>
        ))}
      </View>
      <FromButton label="registrar otro" onPress={onRegisterAnother} />
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
 tableContainer:{
  flex: 1,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 8,
  overflow: 'hidden',
 },
 tableHeader:{
  flexDirection: 'row',
  backgroundColor: '#f5f5f5',
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  paddingVertical: 12,
  paddingHorizontal: 8,
 },
 headerCell:{
  flex: 1,
  fontWeight: '700',
  fontSize: 14,
  color: '#333',
  textAlign: 'center',
 },
 tableRow:{
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
  paddingVertical: 12,
  paddingHorizontal: 8,
 },
 cell:{
  flex: 1,
  fontSize: 14,
  color: '#666',
  textAlign: 'center',
 }
})
