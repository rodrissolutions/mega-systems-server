import { v2 as cloudinary } from 'cloudinary'
import stream from 'stream'
import { envs } from '../../config/index.config.js'

cloudinary.config({
  cloud_name: envs.CLOUDINARY_NAME,
  api_key: envs.CLOUDINARY_KEY,
  api_secret: envs.CLOUDINARY_API_SECRET,
  secure: true,
})

const uploadFile = async (folder, fileBuffer, fileName) => {
  const bufferStream = new stream.PassThrough()
  bufferStream.end(fileBuffer)

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `mega-systems/${folder}`,
        overwrite: true,
        public_id: fileName,
      },
      (error, result) => {
        if (error) {
          reject(new Error(`Error al subir el archivo a Cloudinary: ${error}`))
        } else {
          resolve(result.secure_url)
        }
      }
    )

    bufferStream.pipe(uploadStream)
  })
}

const deleteFile = async (publicId) => {
  cloudinary.uploader
    .destroy(publicId, { resource_type: 'image' })
    .then((res) => {
      return {
        code: 200,
        message: 'Archivo eliminado exitosamente',
      }
    })
    .catch((err) => {
      return {
        code: 400,
        message: 'Error al eliminar el archivo',
      }
    })
}

export default {
  uploadFile,
  deleteFile,
}
