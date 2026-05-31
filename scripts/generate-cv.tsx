import { renderToFile } from "@react-pdf/renderer"
import { mkdir } from "node:fs/promises"
import { createElement } from "react"
import { CvDocument } from "../lib/cv/CvDocument"
import { getCvContent } from "../lib/cv/content"
import { routing } from "../i18n/routing"

// Renders one static PDF per locale into /public so the /cv page can link to
// them directly. Re-run with `npm run generate:cv` whenever the CV content in
// lib/cv/content.ts changes.
const outDir = "public"

async function main() {
  await mkdir(outDir, { recursive: true })
  for (const locale of routing.locales) {
    const { pdfFile } = getCvContent(locale)
    const path = `${outDir}/${pdfFile}`
    const element = createElement(CvDocument, { locale }) as Parameters<
      typeof renderToFile
    >[0]
    await renderToFile(element, path)
    console.log(`✓ ${path}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
