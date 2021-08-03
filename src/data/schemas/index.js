import { pick } from 'lodash'

const assetMetadataSchema = {
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
          description: null
      }
  }
}

const voteMetadataSchema = {
  title: null,
  description: null,
  startTimestamp: 0,
  endTimestamp: 0
}

export const newAssetMetadata = (fields, validate = false) => {
  const validFields = validate
    ? pick(fields, Object.keys(assetMetadataSchema))
    : fields
  
  return {
    ...assetMetadataSchema,
    ...validFields
  }
}

export const newVoteMetadata = (fields, validate = false) => {
  const validFields = validate
    ? pick(fields, Object.keys(voteMetadataSchema))
    : fields
  
  return {
    ...voteMetadataSchema,
    ...validFields
  }
}