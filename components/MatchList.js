import React from 'react'
import { View, ScrollView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';

const MatchList = ({ strEvent, dateEvent }) => (
    <View>
        <ScrollView keyboardShouldPersistTaps="always">
        <Card style={cardStyle}>
                <Card.Content>
                    <Title>{strEvent}</Title>
                    <Paragraph >{dateEvent}</Paragraph>
                </Card.Content>
                <Card.Actions>
                </Card.Actions>
        </Card>
        </ScrollView>
    </View>
)

const cardStyle = {
    marginBottom: 20,
    alignItems: 'center'
}
  
  export default MatchList