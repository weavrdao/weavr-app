import faker from 'faker'

export const votes = [
  {
    id: '0x109b588a4f2a234e302c722f91fe42c5ab828a32',
    org: {
      title: "2214 N 7th St, Saint Joseph, MO 64505, United States"
    },
    createdBy: '0x220866b1a2219f40e72f5c628b65d54268ca3a9d',
    title: faker.lorem.words(3),
    description: faker.lorem.paragraphs(3),
    startTimestamp: 1626796800,
    endTimestamp: 1627228800
  },
]