import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"

export function AlbumImgView() {
  useEffect(() => { }, []);

  const { albumId, imgId } = useParams();
  return (
    <h1>Album Img - {albumId}.{imgId}</h1>
  )
}