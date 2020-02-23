import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
    uri: 'https://newsapi.org/v2/',
    headers: {
      Authorization: '62047a955ea94cc094e50c43ede1703f'
    }
  })

  export const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  })

const matchesRestLink = new RestLink({
  uri: 'https://www.thesportsdb.com/api/v1/'
})

  export const matchesClient = new ApolloClient({
    link: matchesRestLink,
    cache: new InMemoryCache()
  })