import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth'
import brandRouter from './routes/brand'
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/brand', brandRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Backend running on port ${PORT}`))
