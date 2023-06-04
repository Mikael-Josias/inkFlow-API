import express, { Express } from 'express'
import cors from 'cors'
import { userRouter } from './routes'
import { ErrorMiddleware } from './middlewares'
import { connectDb } from './config'

export const app = express()
app.use(cors())
app.use(express.json())

app
    .use('/user', userRouter)
    .use(ErrorMiddleware)

export function init(): Promise<Express> {
    connectDb()
    return Promise.resolve(app)
}

export default app
