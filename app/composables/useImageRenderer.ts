import type {
  ImageRenderOptions,
  IImage,
} from '~/types/images'

export const useImageRenderer = () => {

  const renderImage = (
    source: IImage | HTMLCanvasElement,
    options: ImageRenderOptions,
    name?: string,
  ) => {
    return new Promise<string | null>((resolve) => {

      const create = (image: HTMLImageElement | HTMLCanvasElement) => {

        const canvas = document.createElement('canvas')

        canvas.width = image.width
        canvas.height = image.height

        const ctx = canvas.getContext('2d')

        if (!ctx) {
          resolve(null)
          return
        }

        const size = Math.min(canvas.width, canvas.height)
        const x = (canvas.width - size) / 2
        const y = (canvas.height - size) / 2

        ctx.save()

        if (options.crop === 'circle') {
          console.log("circle option");
          ctx.beginPath()

          ctx.arc(
            x + size / 2,
            y + size / 2,
            size / 2,
            0,
            Math.PI * 2,
          )

          ctx.clip()
        }

        if (options.crop === 'square') {
          console.log("square option");
          ctx.beginPath()

          ctx.rect(
            x,
            y,
            size,
            size,
          )

          ctx.clip()
        }

        ctx.drawImage(image, 0, 0)

        ctx.restore()
const imageName = name ?? ( source instanceof HTMLCanvasElement ? '' : source.name)
        if (options.addName && imageName) {
          console.log("if condition addName && imageName:", imageName);
          const fontSize =
            size * (options.fontSizeRatio ?? 0.18)

          const bottomOffset =
            size * (options.bottomOffsetRatio ?? 0.08)

          ctx.fillStyle = 'white'
          ctx.font = `bold ${fontSize}px Arial`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'bottom'

          ctx.fillText(
            imageName,
            x + size / 2,
            y + size - bottomOffset,
          )
        }

        resolve(canvas.toDataURL('image/png'))
      }

      // Source = Canvas
      if (source instanceof HTMLCanvasElement) {
        create(source)
        return
      }

      // Source = IImage
      const image = new Image()

      image.onload = () => {
        create(image)
      }

      image.onerror = () => {
        resolve(null)
      }

      image.src = source.src
    })
  }

  return {
    renderImage,
  }
}