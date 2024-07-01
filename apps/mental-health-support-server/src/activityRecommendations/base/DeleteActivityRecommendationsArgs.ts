/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActivityRecommendationsWhereUniqueInput } from "./ActivityRecommendationsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteActivityRecommendationsArgs {
  @ApiProperty({
    required: true,
    type: () => ActivityRecommendationsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ActivityRecommendationsWhereUniqueInput)
  @Field(() => ActivityRecommendationsWhereUniqueInput, { nullable: false })
  where!: ActivityRecommendationsWhereUniqueInput;
}

export { DeleteActivityRecommendationsArgs as DeleteActivityRecommendationsArgs };
