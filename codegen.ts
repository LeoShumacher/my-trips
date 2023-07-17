
import { Content } from '@/templates/Pages/styles';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/clk5oke041e2t01umeq9x0n7g/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
