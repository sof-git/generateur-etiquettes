import html2canvas from '@html2canvas/html2canvas'
import { jsPDF } from 'jspdf'

export const usePdfExport = () => {
  const waitForImages = async (element: HTMLElement) => {
  const images = Array.from(element.querySelectorAll('img'))

  await Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth > 0) {
        return Promise.resolve()
      }

      return new Promise<void>((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true })
        img.addEventListener('error', () => resolve(), { once: true })
      })
    })
  )
  }

const exportPdf = async (
  element: HTMLElement,
  orientation: 'landscape' | 'portrait'
) => {

  await waitForImages(element)

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
  })

  const image = canvas.toDataURL('image/png')

  const pdf = new jsPDF({
    orientation,
    unit: 'mm',
    format: 'a4',
  })

  if (orientation === 'portrait') {
    pdf.addImage(image, 'PNG', 0, 0, 210, 297)
  } else {
    pdf.addImage(image, 'PNG', 0, 0, 297, 210)
  }

  pdf.save('etiquettes.pdf')
}

  return {
    waitForImages,
    exportPdf,
  }
}