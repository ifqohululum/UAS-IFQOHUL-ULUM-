import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Songkok Nasional hitam polos',
      price: 'Rp 50,000',
      image:
        'https://cdn.idntimes.com/content-images/community/2024/04/1000005109-329ae2b286ff7799fbbec7d4597d307a-67d481c5d5b36f4098cc2718c7f8cd2b.jpg',
    },
    {
      id: 2,
      name: 'Songkok Nikah',
      price: 'Rp 105,000',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEW0k7pDh5_-Sg6J8yd0BFCYCt7RTAMBrPg&s',
    },
    {
      id: 3,
      name: 'Songkok Hitam Bordir',
      price: 'Rp 130,000',
      image:
        'https://s4.bukalapak.com/img/49973668792/s-463-463/20220507095625b8a85942ab42c386076b9b22bf09b81a.jpg.webp',
    },
    {
      id: 4,
      name: 'Songkok Putih Songket',
      price: 'Rp 1250,000',
      image:
        'https://media.karousell.com/media/photos/products/2018/07/12/white_songket_songkok_1531379772_8406216c_progressive.jpg',
    },
    {
      id: 5,
      name: 'Songkok Haji Sudemala',
      price: 'Rp 100,000',
      image: 'https://img.ws.mms.shopee.co.id/5d3bca504bdf53d1b34e4e3dabec9023',
    },
    {
      id: 6,
      name: 'Songkok Rajutan',
      price: 'Rp 40,000',
      image:
        'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-65035452/no-brand_peci-rajut-peci-haji-peci-songkok-peci-sholat-kopiah-sholat-peci_full01.jpg',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Toko Songkok</Text>
      </View>
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <View style={styles.productList}>
          {featuredProducts.map(product => (
            <View key={product.id} style={styles.productItem}>
              <Image
                source={{uri: product.image}}
                style={styles.productImage}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/100';
                }}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Toko Songkok</Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    marginBottom: 5,
    color:'black'
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});
