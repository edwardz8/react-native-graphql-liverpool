import gql from 'graphql-tag'

export const Headlines = gql`
    query TopHeadlines {
        headlines
            @rest(
                type: "HeadlinesPayload"
                path: "top-headlines?country=gb&category=sports&q=Liverpool&apiKey=62047a955ea94cc094e50c43ede1703f"
            ) {
               totalResults
               articles @type(name: "ArticlePayload") {
                   title
                   description
                   publishedAt
                   url
                   urlToImage
                   content
                   source @type(name: "SourcePayload") {
                       name
                   }
               }
            }
    }
`

export const UpcomingMatches = gql`
    query NextMatches {
        matches
        @rest(
            type: "MatchesPayload"
            path: "json/1/eventsnext.php?id=133602"
        ) {
            events @type(name: "MatchesPayload") {
                idEvent
                strEvent
                dateEvent
            }
        }
    }
`