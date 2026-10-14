import html2canvas from '@html2canvas/html2canvas'
import { jsPDF } from 'jspdf'

export const usePdfExport = () => {
  const waitForImages = async (element: HTMLElement) => {
    const images = Array.from(element.querySelectorAll('img'))

    await Promise.all(
      images.map(async (img) => {
        if (!img.complete) {
          await new Promise<void>((resolve) => {
            const finish = () => resolve()

            img.addEventListener('load', finish, { once: true })
            img.addEventListener('error', finish, { once: true })
          })
        }

        if (img.naturalWidth > 0) {
          try {
            await img.decode()
          } catch {
          }
        }
      }),
    )
  }

  const blobUrlToDataUrl = async (url: string): Promise<string> => {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Impossible de charger l'image Blob : ${response.status}`)
    }

    const blob = await response.blob()

    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result)
        } else {
          reject(new Error('Conversion de l’image en Data URL impossible'))
        }
      }

      reader.onerror = () => reject(reader.error)
      reader.readAsDataURL(blob)
    })
  }

  const prepareClonedImages = async (clonedDocument: Document) => {
    const images = Array.from(clonedDocument.images)
    const cache = new Map<string, Promise<string>>()

    await Promise.all(
      images.map(async (img) => {
        const src = img.src

        if (src.startsWith('blob:')) {
          let conversion = cache.get(src)

          if (!conversion) {
            conversion = blobUrlToDataUrl(src)
            cache.set(src, conversion)
          }

          img.src = await conversion
        }

        await img.decode()

        if (img.naturalWidth === 0 || img.naturalHeight === 0) {
          throw new Error(`Image invalide dans le document cloné : ${img.src}`)
        }
      }),
    )
  }

  const exportPdf = async (
    elements: HTMLElement[],
    orientation: 'portrait' | 'landscape' = 'portrait',
    beforeCapture?: (index: number) => Promise<void>,
  ) => {
    if (elements.length === 0) return

    const pdf = new jsPDF({
      orientation,
      unit: 'mm',
      format: 'a4',
    })

    const pageWidth = orientation === 'portrait' ? 210 : 297
    const pageHeight = orientation === 'portrait' ? 297 : 210

    for (const [index, element] of elements.entries()) {
      await beforeCapture?.(index)

      const rect = element.getBoundingClientRect()

      if (rect.width === 0 || rect.height === 0) {
        throw new Error(
          `La page ${index + 1} est invisible ou ne possède pas de dimensions.`,
        )
      }

      await waitForImages(element)

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: prepareClonedImages,
      })

      if (canvas.width === 0 || canvas.height === 0) {
        throw new Error(
          `La capture de la page ${index + 1} a produit un canvas vide.`,
        )
      }

      try {
        const image = canvas.toDataURL('image/jpeg', 0.85)

        if (index > 0) {
          pdf.addPage()
        }

        pdf.addImage(
          image,
          'JPEG',
          0,
          0,
          pageWidth,
          pageHeight,
        )
      } finally {
        canvas.width = 0
        canvas.height = 0
      }
    }

    pdf.save('etiquettes.pdf')
  }

  return {
    exportPdf,
  }
}