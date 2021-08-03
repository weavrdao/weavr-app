import { pick } from 'lodash'

const assetMetadataSchema = {
  asset_id: null,
  world: {
    property: {
      address: null,
      currentRent: 0,
      marketValue: 0,
      area: 0,
      rooms: {
        bedroomCount: 0,
        bathroomCount: 0
      },
      grossYieldPct: 0,
      yearBuilt: 0,
      coverImage: null
    }
  },
  market: {
    holderCount: 0,
    tokenName: null
  },
  dao: {

  }
}

export const newAssetMetadata = (fields, validate = false) => {
  const validFields = validate
    ? pick(fields, Object.keys(assetMetadataSchema).concat(['asset_id']))
    : fields
  
  return {
    ...assetMetadataSchema,
    ...validFields
  }
}