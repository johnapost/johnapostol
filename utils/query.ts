import { GraphQLClient } from "graphql-request";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const query = async (query: string): Promise<Record<string, any>> => {
  const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_API as string);

  return await graphQLClient.request(query);
};

export default query;
