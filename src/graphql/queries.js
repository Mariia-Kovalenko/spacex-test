import gql from 'graphql-tag';

export const GET_ROCKETS = gql`
query GetRockets {
    rockets {
        id
        description
        name
    }
}
`