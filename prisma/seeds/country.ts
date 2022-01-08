export const initialCountry = {
  name: 'Latvia',
  code: 'LV',
  states: {
    create: [
      {
        name: 'Salaspils District',
        cities: {
          create: [
            {
              name: 'Salaspils',
            },
          ],
        },
      },
      {
        name: 'Riga',
        cities: {
          create: [
            {
              name: 'Riga',
            },
          ],
        },
      },
    ],
  },
};
