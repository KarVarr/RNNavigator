import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import MealItem from './MealItem';

export default function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealITemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealITemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});