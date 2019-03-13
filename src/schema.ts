import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: any = fileLoader(path.join(__dirname, "./api/**/*.graphql"));

// 확장자를 * 로 하는 이유는 추후 빌드시 ts 파일들이 js로 빌드되기 때문.
const allResolvers: any = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes: any = mergeTypes(allTypes);
const mergedResolvers: any = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

export default schema;
