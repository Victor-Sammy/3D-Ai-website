import express from 'express'
import * as dotenv from 'dotenv'
//import { OpenAI } from 'openai'
import axios from 'axios'

dotenv.config()

const router = express.Router()

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
// })

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Dalle routes' })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body

    // const response = await openai.images.generate({
    //   //model: 'dall-e-3',
    //   prompt,
    //   n: 1,
    //   size: '1024x1024',
    //   response_format: 'b64_json',
    // })

    const unsplashResponse = await axios.get(
      'https://api.unsplash.com/photos/random',
      {
        params: {
          query: prompt,
          client_id: process.env.UNSPLASH_API_KEY,
        },
      }
    )

    //const image = response.data[0].b64_json
    const image = unsplashResponse.data.urls.regular

    res.status(200).json({ photo: image })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
