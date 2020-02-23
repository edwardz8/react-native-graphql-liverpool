import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { matchesClient } from '../src/graphql/Client'
import { UpcomingMatches } from '../src/graphql/Queries'
import MatchList from './MatchList'

function Matches() {
    const [events, setEvents] = useState([])

    useEffect(() => {
      requestMatches()
    }, [])

    const requestMatches = () => {
      matchesClient
      .query({
        query: UpcomingMatches
      })
      .then(response => {
        setEvents(response.data.matches.events)
      })
      .catch(error => {
        console.log('ERROR ==>', error)
      })
    }

    return (
    <View style={styles.contentContainer}>
      <Text style={styles.headerText}>Upcoming Matches</Text>
      <FlatList data={events} renderItem={({ item }) =>  <MatchList {...item} /> } 
                 keyExtractor={item => `${item.idEvent}` }   />
    </View>
    )
}

  const styles = StyleSheet.create({
    headerText: {
      marginBottom: 5,
      fontSize: 30,
      fontWeight: 'bold'
    },
      contentContainer: {
        paddingTop: 40,
        alignItems: 'center'
      }
  });

export default Matches