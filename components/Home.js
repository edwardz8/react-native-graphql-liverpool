import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { client } from '../src/graphql/Client'
import { Headlines } from '../src/graphql/Queries'
import Article from './Article'
import Header from './Header'

function HomeScreen({ navigation }) {
    // const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])

    useEffect(() => {
      requestHeadlines()
    }, [])
  
    const requestHeadlines = () => {
      client
      .query({
        query: Headlines
      })
      .then(response => {
        setArticles(response.data.headlines.articles)
      })
      .catch(error => {
        console.log('ERROR ==>', error)
      })
    }

  return (
    <View style={styles.contentContainer}>
      <Header />
    <FlatList data={articles} renderItem={({ item }) => <Article {...item} />}
              keyExtractor={item => `${item.url}`} />
    </View>
  )
}

const styles = StyleSheet.create({
    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingVertical: 20,
      backgroundColor: '#ededed'
    }
  });

export default HomeScreen