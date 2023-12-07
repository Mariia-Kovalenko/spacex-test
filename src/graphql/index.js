import { ApolloClient, InMemoryCache } from "@apollo/client";
import {GET_ROCKETS} from './queries';

const URI = 'https://spacex-production.up.railway.app/';

export const apolloClient = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache()
});

class SpaceService {
    async getRockets() {
        try {
            const res = await apolloClient.query({
                query: GET_ROCKETS
            })

            if (!res || !res.data) throw new Error('Cannot fetch data');
            return res.data.rockets;
        } catch (error) {
            throw error;
        }
    }
}

const SpaceMission = new SpaceService();
export default SpaceMission;