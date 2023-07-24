'use client'

import { ChangeEvent, useState } from 'react'

export default function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    if (!files) {
      return
    }
    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }
  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        id="media"
        accept="image/*"
        className="invisible  h-0 w-0"
        name="coverUrl"
      />
      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video max-w-2xl rounded-lg object-cover"
        />
      )}
    </>
  )
}
