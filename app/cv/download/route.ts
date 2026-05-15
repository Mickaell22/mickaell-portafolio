import { renderToBuffer } from "@react-pdf/renderer"
import { createElement } from "react"
import { CvDocument } from "@/lib/cv/CvDocument"

export async function GET() {
  const buffer = await renderToBuffer(createElement(CvDocument))
  const uint8 = new Uint8Array(buffer)

  return new Response(uint8, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CV_Mickaell_Moran.pdf"',
    },
  })
}
