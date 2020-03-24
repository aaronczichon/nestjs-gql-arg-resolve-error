import { Resolver, Query, ArgsType, Args, Field } from '@nestjs/graphql';
import { SampleType } from './sample.type';
import { ObjectScalar } from './object.scalar';

@ArgsType()
export class SampleGetArgs  {
  @Field(() => ObjectScalar, { nullable: true })
  filter?: any;
}

@Resolver(() => SampleType)
export class SampleResolver {
  @Query(() => SampleType, {
    name: 'Sample',
    description: 'Returns all Samples',
  })
  public async get(
    @Args() select: SampleGetArgs,
  ): Promise<SampleType> {
    if (select.filter) {
      if (!select.filter.id)
      return {
        result: `Filter provided but got "${select.filter.id}" for id`
      }
      return {
        result: select.filter.id
      };
    }
    else 
    return {
      result: 'No Filter'
    };
  }
}