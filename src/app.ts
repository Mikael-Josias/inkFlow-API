import express, { Express } from 'express'
import cors from 'cors'

export const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

export function init(): Promise<Express> {
    return Promise.resolve(app)
}

export default app
