import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SampleType {
  @Field()
  public result: string;
}
