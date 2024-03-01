import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  return (
    <View style={styles.container}>
      {[...Array(filledStars)].map((_, index) => (
        <MaterialCommunityIcons name="star" size={26} />
      ))}
      {hasHalfStar && <MaterialCommunityIcons name="star-half-full" size={26} />}
      {[...Array(5 - filledStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <MaterialCommunityIcons name="star-outline" size={26} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
});

export default StarRating;