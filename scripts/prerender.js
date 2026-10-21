import { readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const outputDirectory = new URL('../dist/', import.meta.url)
const htmlPath = new URL('index.html', outputDirectory)
const serverEntry = new URL('server/entry-server.js', outputDirectory)
const { render } = await import(pathToFileURL(serverEntry.pathname))
const appHtml = await render()
const html = await readFile(htmlPath, 'utf8')
const appPlaceholder = '<div id="app"></div>'

if (!html.includes(appPlaceholder)) {
  throw new Error('Could not find the application mount point in dist/index.html')
}

await writeFile(htmlPath, html.replace(appPlaceholder, `<div id="app">${appHtml}</div>`))
