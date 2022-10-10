import { FlatList, StyleSheet  } from 'react-native';
import React from 'react';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';





export default function CategoriesScreens({navigation}) {

    function renderCategoryItem(itemData) {
      function pressHandler() {
        navigation.navigate('MealsOverview');
      }
      return (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      );
    }
    
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

