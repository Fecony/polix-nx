import { PrismaClient } from '@prisma/client';
import { tags, initialCountry } from './seeds';

const prisma = new PrismaClient();

// Countries, states, cities taken from https://github.com/dr5hn/countries-states-cities-database

async function main() {
  await prisma.country.deleteMany();
  await prisma.country.create({
    data: initialCountry,
  });

  await prisma.tag.deleteMany();
  await prisma.tag.createMany({
    data: tags,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
