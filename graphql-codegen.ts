
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "graphql-schema.graphql",
  documents: "app/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "app/graphql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
