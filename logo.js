// The logo was generated with the following code:
location.href = "https://www.fontget.com/font/spacex/"
// Then in the console:
const fontUrl = "https://dl.fontget.com/s/p/spacex/woff_src/SpaceX.woff?token=OqQQywLBHxpoezLfkWPzfA&expires=1696188596"
const text = "ReplaceX" // or "R(X)" for the icon
const opentype = await import("https://cdn.jsdelivr.net/npm/opentype.js@1.3.4/+esm")
const font = await opentype.load(fontUrl)
const fontSize = 48
const svgPath = font.getPath(text, 0, 0, fontSize).toPathData()
const svgString = `<svg xmlns="http://www.w3.org/2000/svg"><path d="${svgPath}"/></svg>`
document.body.insertAdjacentHTML("afterbegin", svgString)
const svgElement = document.querySelector("svg")
const svgBBox = svgElement.getBBox()
svgElement.setAttribute("viewBox", `${Math.round(svgBBox.x - svgBBox.width * 0.05)} ${Math.round(svgBBox.y - svgBBox.height * 0.2)} ${Math.round(svgBBox.width * 1.1)} ${Math.round(svgBBox.height * 1.4)}`)
// Then copy to your clipboard and paste into logo.svg with:
copy(svgElement.outerHTML)
// Or capture node screenshot for the 128x128 logo.png with:
document.body.insertAdjacentHTML("afterbegin", `<img src="data:image/svg+xml;utf8,${encodeURIComponent(svgElement.outerHTML)}" width="128" height="128">`)
