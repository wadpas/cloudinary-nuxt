import cloudinary from 'cloudinary'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  interface Results {
    resources: [{ public_id: string }]
  }

  cloudinary.v2.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
  })

  const data: Results = await cloudinary.v2.search
    .expression('resource_type:image ')
    .sort_by('public_id', 'desc')
    .max_results(12)
    .execute()

  return data
})
