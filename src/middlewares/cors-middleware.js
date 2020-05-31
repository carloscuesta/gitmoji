import Cors from 'cors'
import runMiddleware from './run-middleware'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET']
})

export default async function corsMiddleware(req, res) {
  return await runMiddleware(req, res, cors)
}
