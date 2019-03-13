export type Resolver = (parent, agres, context, info) => any;

export interface Resolvers {
  [key: string]: {
    [key: string]: Resolver;
  };
}
