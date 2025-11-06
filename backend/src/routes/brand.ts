import { Router } from 'express'
const router = Router()

// POST /api/brand/logo  -> returns mock svg url
router.post('/logo', async (req, res) => {
  const { brandName } = req.body
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='120'><rect width='100%' height='100%' fill='#f8fafc'/><text x='20' y='65' font-family='Arial' font-size='36' fill='#0f172a'>${brandName || 'Brand'}</text></svg>`
  const dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
  res.json({ logoUrl: dataUrl, palette: ['#0f172a', '#3b82f6'] })
})

export default router
