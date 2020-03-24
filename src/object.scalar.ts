import { GraphQLScalarType } from 'graphql';

export const ObjectScalar = new GraphQLScalarType({
  name: 'Object',
  description: 'A generic object',
  parseValue: (value: AnyObject | AnyObject[]) => {
    if (Array.isArray(value)) {
      return [...value];
    }
    return Object.assign({}, value);
  },
  serialize: (value: AnyObject | AnyObject[]) => {
    if (Array.isArray(value)) {
      return [...value];
    }
    return Object.assign({}, value);
  },
});

type AnyObject = { [key: string]: any }
