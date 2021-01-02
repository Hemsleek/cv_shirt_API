import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello villagers😀')
})

app.listen(9090, () => {
    console.log('Server is running on port 9090')
})