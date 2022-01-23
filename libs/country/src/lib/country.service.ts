import { Injectable } from '@nestjs/common';
import { PrismaService, CountryCreateInput, CountryUpdateInput, Country } from '@polix/prisma';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async create(createCountryInput: CountryCreateInput): Promise<Country> {
    const country = await this.prisma.country.findFirst({
      where: { name: createCountryInput.name },
    });

    // TODO: Move error message to common package for translations
    if (country) {
      throw new Error('Country already exists');
    }

    return this.prisma.country.create({
      data: createCountryInput,
    });
  }

  async findAll(): Promise<Country[]> {
    return await this.prisma.country.findMany({
      include: {
        states: {
          include: {
            cities: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<Country> {
    return await this.prisma.country.findFirst({
      where: { id },
      include: {
        states: {
          include: {
            cities: true,
          },
        },
      },
    });
  }

  async update(id: number, updateCountryInput: CountryUpdateInput): Promise<Country> {
    return await this.prisma.country.update({
      where: {
        id,
      },
      data: updateCountryInput,
    });
  }

  async remove(id: number): Promise<Country> {
    return await this.prisma.country.delete({
      where: { id },
    });
  }
}
