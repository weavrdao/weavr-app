import faker from 'faker'

export const votes = [
  {
    id: '0x109b588a4f2a234e302c722f91fe42c5ab828a32',
    org: {
      title: "2214 N 7th St, Saint Joseph, MO 64505, United States"
    },
    createdBy: '0x220866b1a2219f40e72f5c628b65d54268ca3a9d',
    title: faker.commerce.productName(),
    description: faker.lorem.paragraphs(6),
    startTimestamp: 1626796800,
    endTimestamp: 1627228800,
    options: [
      {
        id: "0x04816db5c52241596376a07b0ed6306c8eef74ac7f9c3767ca11e2088c3a8f52",
        title: "Option A"
      },
      {
        id: "0x3d028447bfe1dcc2c859f717b9d62b86e956e0df786c46818f8bb8479ba4a710",
        title: "Option B"
      },
      {
        id: "0x0b0a497079ec1c7246ec20851a38df9f87eed1d94ffe497288f48166d01e7762",
        title: "Option C"
      }
    ]
  },
]