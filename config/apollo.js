import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';


const httpLink = createHttpLink({
    uri: 'https://shrouded-beach-69151-71b755b8a7f1.herokuapp.com/'
});

const authLink = setContext((_, { headers }) => {

    // Leer el storage almacenado
    const token = localStorage.getItem('token');
    // console.log(token);

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});


const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});


export default client;