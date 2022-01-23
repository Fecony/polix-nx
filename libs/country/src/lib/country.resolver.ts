import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Country, CountryCreateInput, CountryUpdateInput } from '@polix/prisma';
import { CountryService } from './country.service';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(() => Country)
  createCountry(@Args('createCountryInput') createCountryInput: CountryCreateInput) {
    return this.countryService.create(createCountryInput);
  }

  @Query(() => [Country], { name: 'countries' })
  findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Query(() => Country, { name: 'country' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Country> {
    return this.countryService.findOne(id);
  }

  @Mutation(() => Country)
  updateCountry(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCountryInput') updateCountryInput: CountryUpdateInput,
  ): Promise<Country> {
    return this.countryService.update(id, updateCountryInput);
  }

  @Mutation(() => Country)
  removeCountry(@Args('id', { type: () => Int }) id: number): Promise<Country> {
    return this.countryService.remove(id);
  }
}
