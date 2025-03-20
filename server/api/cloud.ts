import cloudinary from 'cloudinary'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  cloudinary.v2.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
  })

  const data = await cloudinary.v2.search
    .expression('folder:books-nuxt/covers')
    .sort_by('public_id', 'desc')
    .max_results(12)
    .execute()

  return data
})
