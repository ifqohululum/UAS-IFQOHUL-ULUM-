import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tentang Toko Songkok</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://scontent.fsub6-6.fna.fbcdn.net/v/t39.30808-6/281741768_1119227385605995_1868877054465116596_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BfhgvkNq6KkQ7kNvgHAm2e8&_nc_zt=23&_nc_ht=scontent.fsub6-6.fna&oh=00_AYB5tHdtpcJiVEoZCiuutOY7OmJMpk7ZMmjfdMR0vaBh4g&oe=6696F9E9',
          }}
          style={styles.shopImage}
          onError={e => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x200';
          }}
        />
        <Text style={styles.sectionTitle}>Kisah Kami</Text>
        <Text style={styles.text}>
          Toko Songkok didirikan pada tahun 2024 dengan misi untuk menyediakan
          penutup kepala tradisional berkualitas tinggi. Perjalanan kami dimulai
          di sebuah bengkel kecil di mana kami membuat setiap songkok dengan
          hati-hati dan presisi. Hari ini, kami bangga telah melayani ribuan
          pelanggan puas di seluruh negeri.
        </Text>
        <Text style={styles.sectionTitle}>Misi</Text>
        <Text style={styles.text}>
          Misi kami adalah untuk melestarikan tradisi memakai songkok sambil
          berinovasi dan beradaptasi dengan tren mode modern. Kami berkomitmen
          untuk menyediakan produk berkualitas terbaik dan layanan yang luar
          biasa kepada pelanggan kami.
        </Text>
        <Text style={styles.sectionTitle}>Visi</Text>
        <Text style={styles.text}>
          Kami membayangkan masa depan di mana songkok tidak hanya menjadi
          simbol tradisi tetapi juga pernyataan gaya dan kebanggaan budaya. Kami
          berusaha menjadi penyedia songkok terkemuka di wilayah ini.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Toko Songkok</Text>
      </View>
    </ScrollView>
  );
};

export default About;

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
  content: {
    padding: 20,
  },
  shopImage: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
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
