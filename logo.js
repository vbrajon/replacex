// The logo was generated with the following code:
location.href = "https://www.fontget.com/font/spacex/"
// Then in the console:
const fontUrl = "https://dl.fontget.com/s/p/spacex/woff_src/SpaceX.woff?token=OqQQywLBHxpoezLfkWPzfA&expires=1696188596"
const text = "R(X)" // or ReplaceX
const opentype = await import("https://cdn.jsdelivr.net/npm/opentype.js@1.3.4/+esm")
const font = await opentype.load(fontUrl)
const fontSize = 48
const svgPath = font.getPath(text, 0, 0, fontSize).toPathData()
const svgString = `<svg xmlns="http://www.w3.org/2000/svg"><path d="${svgPath}"/></svg>`
document.body.insertAdjacentHTML("afterbegin", svgString)
const svgElement = document.querySelector("svg")
const svgBBox = svgElement.getBBox()
svgElement.setAttribute("viewBox", `${Math.round(svgBBox.x - svgBBox.width * 0.05)} ${Math.round(svgBBox.y - svgBBox.height * 0.2)} ${Math.round(svgBBox.width * 1.1)} ${Math.round(svgBBox.height * 1.4)}`)
copy(svgElement.outerHTML)
// Then paste into logo.svg
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -61 221 80"><path d="M0.91 0L0.91-18.35L0.91-18.35L10.43-18.35L10.43 0L0.91 0ZM46.03-23.63L46.03-20.72L46.03-20.72Q46.03-18.61 44.94-16.86Q43.85-15.12 41.67-14.09Q39.49-13.05 36.23-13.05L36.23-13.05L34.92-13.05L45.40 0L33.91 0L24.38-12.09L23.53-13.05L18.89-18.47L24.38-18.47L30.23-18.47L34.48-18.47Q35.58-18.47 36.47-19.25Q37.36-20.04 37.36-21.14L37.36-21.14L37.36-23.20Q37.36-24.30 36.47-25.09Q35.58-25.88 34.48-25.88L34.48-25.88L14.44-25.88L10.43-25.88L0.91-25.88L0.91-31.29L36.23-31.29Q39.49-31.29 41.67-30.26Q43.85-29.23 44.94-27.48Q46.03-25.73 46.03-23.63L46.03-23.63ZM55.78 0.26L55.78-31.52L55.78-31.52Q55.78-33.63 56.66-35.16Q57.54-36.68 59.50-37.50Q61.45-38.32 64.71-38.32L64.71-38.32L70.10-38.32L70.10-33.33L64.01-33.33L64.01 2.06L70.10 2.06L70.10 7.05L64.29 7.05Q61.03 7.05 59.18 6.23Q57.33 5.41 56.55 3.89Q55.78 2.37 55.78 0.26L55.78 0.26ZM114.33 0L101.30-9.70L101.30-9.70Q105.09-12.66 109.10-15.28L109.10-15.28L129.80 0L114.33 0ZM87.40-31.29L98.06-23.41L98.06-23.41Q93.59-20.77 89.84-18.23L89.84-18.23L72.28-31.29L87.40-31.29ZM86.37 0L71.60 0L71.60 0Q71.60 0 73.63-1.98Q75.66-3.96 79.72-7.32Q83.79-10.69 89.87-14.91Q95.95-19.13 104.07-23.68Q112.20-28.24 122.33-32.63Q132.47-37.01 144.63-40.68Q156.80-44.34 170.99-46.78Q185.18-49.22 201.38-49.88L201.38-49.88Q201.38-49.88 197.13-49.32Q192.89-48.77 185.53-47.38Q178.17-45.98 168.63-43.55Q159.09-41.11 148.34-37.37Q137.58-33.63 126.56-28.37Q115.55-23.11 105.26-16.08Q94.97-9.05 86.37 0L86.37 0ZM151.24-31.52L151.24-31.52L151.24 0.26Q151.24 2.37 150.47 3.89Q149.70 5.41 147.84 6.23Q145.99 7.05 142.73 7.05L142.73 7.05L136.92 7.05L136.92 2.06L142.99 2.06L142.99-33.33L136.92-33.33L136.92-38.32L142.31-38.32Q145.55-38.32 147.52-37.50Q149.48-36.68 150.36-35.16Q151.24-33.63 151.24-31.52L151.24-31.52Z"></path></svg>
// Then capture node screenshot for the 128x128 logo.png
