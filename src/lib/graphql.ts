import { API, Amplify, graphqlOperation } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import config from '../aws-exports';

Amplify.configure(config);

export interface GraphQLQueryOptions<V> {
  variables?: V;
  authMode?: GRAPHQL_AUTH_MODE;
}

export interface GraphQLMutationOptions<I> {
  input?: I;
  authMode?: GRAPHQL_AUTH_MODE;
}

export async function executeMutation<M, I>(
  mutation: string,
  options: GraphQLMutationOptions<I>
) {
  return (await API.graphql(
    graphqlOperation(mutation, options)
  )) as GraphQLResult<M>;
}

export async function executeQuery<Q, V>(
  query: any,
  options: GraphQLQueryOptions<V>
): Promise<GraphQLResult<Q>> {
  return (await API.graphql(graphqlOperation(query, options))) as GraphQLResult<
    Q
  >;
}
