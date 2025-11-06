import { Router } from 'express'
const router = Router()

// Mock signup/login routes for scaffold
router.post('/signup', async (req, res) => {
  const { email } = req.body
  // In scaffold return mock user
  res.json({ user: { id: 'user_123', email } })
})

router.post('/login', async (req, res) => {
  const { email } = req.body
  res.json({ user: { id: 'user_123', email } })
})

export default router
