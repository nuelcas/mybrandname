export default function useLogoGenerator(){
  const generate = async (opts:any) => {
    // mock: return a data URL svg
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='60'><rect width='100%' height='100%' fill='#eef2ff'/><text x='10' y='35' font-family='Arial' font-size='18' fill='#111'>${opts.brandName || 'Brand'}</text></svg>`
    return { logoDataUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(svg) }
  }
  return { generate }
}
