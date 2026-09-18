import type { IImage } from "~/types/images";

export const useUpload = () => {
  const handleFile = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onFileChange = async (target: IImage, file: File | null) => {
    if (file) {
      target.src = await handleFile(file);
      target.file = file;
    }
  };

  return {
    handleFile,
    onFileChange,
  };
};
