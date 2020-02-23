import React from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';

function ArticleDetail({ route, navigation}) {
    const { title } = route.params
    const { urlToImage } = route.params
    const { content } = route.params
    const { url } = route.params

    return (
        <View>
            <ScrollView keyboardShouldPersistTaps="always">
            <Card>
            <Card.Cover source={{ uri: urlToImage }} />
                <Card.Content>
                    <Title>{title}</Title>
                    <Paragraph >{content}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" color="#ededed" onPress={() => navigation.goBack()} >Home</Button>
                </Card.Actions>
            </Card>
            </ScrollView>
        </View>
        )
}
  
  export default ArticleDetail