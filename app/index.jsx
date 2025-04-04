import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView , Platform} from "react-native";

const categories = ["Apartments", "Villas", "Studios", "Condos", "Penthouses" , "Duplexes" , "Townhouses" ,"Lofts","Bungalows","Farmhouses","Co-living Spaces","Serviced Apartments","Row Houses","Chalets","Mansions"];
const properties = [
  { id: "1", name: "Luxury Villa", price: "$500,000", location: "Los Angeles", image: require("../assets/images/m-villa-273691.jpg") },
  { id: "2", name: "Modern Apartment", price: "$300,000", location: "New York", image: require("../assets/images/download.jpg") },
  { id: "3", name: "Cozy Studio", price: "$150,000", location: "San Francisco", image: require("../assets/images/c_studio.jpg") },
  { id: "4", name: "Beachside Bungalow", price: "$450,000", location: "Miami", image: require("../assets/images/Beachside_Bunglow.jpg") },
  { id: "5", name: "Urban Loft", price: "$350,000", location: "Chicago", image: require("../assets/images/urban_loft.jpg") },
  { id: "6", name: "Country Cottage", price: "$200,000", location: "Austin", image: require("../assets/images/country_cottage.jpg") },
  { id: "7", name: "Mountain Cabin", price: "$250,000", location: "Denver", image: require("../assets/images/mountain_cabin.jpg") },
  { id: "8", name: "Penthouse Suite", price: "$800,000", location: "Seattle", image: require("../assets/images/penthouse.jpg") },
  { id: "9", name: "Suburban Home", price: "$320,000", location: "Phoenix", image: require("../assets/images/surban_home.jpg") },
  ];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.header}>Find a Your Dream Home</Text>
      
      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search properties..." />
      
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}><Text>For Rent</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>For Sale</Text></TouchableOpacity>
      </View>
      
      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      {/* Property List */}
      <FlatList
        data={properties}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.propertyCard}>

            <Image  source={typeof item.image === "string" ? { uri: item.image } : item.image}
             style={styles.propertyImage} />

            <Text style={styles.propertyName}>{item.name}</Text>
            <Text style={styles.propertyPrice}>{item.price}</Text>
            <Text style={styles.propertyLocation}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}


{/* style */}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  searchBar: { height: 40, borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical : 7, marginBottom: 10 },
  filterContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  filterButton: { padding: 10, borderWidth: 1, borderRadius: 8, marginRight: 10 },
  categoryContainer: { flexDirection: "row", paddingHorizontal : 10,  marginBottom : 10 , height: 70 },
  categoryButton: { padding: 10, borderWidth: 1, borderRadius: 8, marginRight: 10 },
  propertyCard: { flex: 1, backgroundColor: "#f9f9f9", padding: 10, borderRadius: 10, margin: 5, alignItems: "center" },
  propertyImage: { width: 100, height: 100, borderRadius: 10, marginBottom: 5 , backgroundColor : "red",resizeMode: "cover" },
  propertyName: { fontWeight: "bold" },
  propertyPrice: { color: "green" },
  propertyLocation: { color: "gray" },
});

