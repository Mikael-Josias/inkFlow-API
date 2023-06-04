import app, { init } from './app'
import 'dotenv/config'

const PORT = process.env.PORT || 4000

init().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
})