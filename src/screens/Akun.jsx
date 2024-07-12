import {StyleSheet, Text, View, ScrollView, Image, Button} from 'react-native';
import React from 'react';

const Profile = () => {
  const user = {
    name: 'Anai_ip',
    alamat: 'Akkor Palengaan Pamekasan',
    email: 'ifqohululum@gmail.com',
    profileImage:
      'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/86/MTA-132501451/no-brand_no-brand_full02.jpg',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil Akun</Text>
      </View>
      <View style={styles.profileSection}>
        <Image
          source={{uri: user.profileImage}}
          style={styles.profileImage}
          onError={e => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/100';
          }}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.alamat}>{user.alamat}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Edit Profil"
          onPress={() => alert('Edit Profil Pressed')}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Toko Songkok</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

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
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  alamat: {
    fontSize: 17,
    marginBottom: 10,
    color: '#000',
  },
  email: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
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
