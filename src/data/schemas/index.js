import { pick } from 'lodash'

const assetDataSchema = {
  world: {
      property: {
          address: null,
          currentRent: 0,
          marketValue: 0,
          area: 0,
          rooms: {
              bdCount: 0,
              baCount: 0
          },
          grossYieldPct: 0,
          yearBuilt: 0,
          coverImage: null,
          description: null,
          doc: null
      }
  }
}

const voteDataSchema = {
  title: null,
  description: null,
  startTimestamp: 0,
  endTimestamp: 0
}

export const newAssetData = (fields, validate = false) => {
  const validFields = validate
    ? pick(fields, Object.keys(assetDataSchema))
    : fields
  
  return {
    ...assetDataSchema,
    ...validFields
  }
}

export const newVoteData = (fields, validate = false) => {
  const validFields = validate
    ? pick(fields, Object.keys(voteDataSchema))
    : fields
  
  return {
    ...voteDataSchema,
    ...validFields
  }
}