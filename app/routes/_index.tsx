import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { graphql } from '../graphql/gql';
import { Query } from '../graphql/graphql';
import graphqlClient from '../graphql-client';
import ExampleComponent from '../components/example';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const locationsQuery = graphql(`
  query GetLocations {
    locations {
      id
      name
      description
    }
  }
`);

export async function loader() {
  return await graphqlClient.request(locationsQuery)
}

export default function Index() {
  const data = useLoaderData() as Query;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div>
        <ol>
          {data.locations.map((location) => (
            <li key={location.id ?? "0"}>{location.name}</li>
          ))}
        </ol>
      </div>
      <ExampleComponent />
    </div>
  );
}
