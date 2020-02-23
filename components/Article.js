import React from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const Article = ({ title, description, urlToImage, navigation, url, content }) => (
    <View>
        <ScrollView keyboardShouldPersistTaps="always">
        <Card style={cardStyle}>
            <Card.Cover source={{ uri: urlToImage }} />
                <Card.Content>
                    <Title>{title}</Title>
                    <Paragraph >{description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" color="#ededed" onPress={(item) => { navigation.navigate('ArticleDetail', { item: url, title, urlToImage, content  }) }}>Full Story</Button>
                    <Button mode="text" color="#ededed" icon="bookmark-outline" color="red" onPress={() => console.log('Pressed')}></Button>
                </Card.Actions>
        </Card>
        </ScrollView>
    </View>
)

const cardStyle = {
    marginBottom: 20
}
  
  export default Article