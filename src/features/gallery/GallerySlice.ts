import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchGallery } from './GalleryAPI'

export interface Image {
  id: string,
  title: string,
  url: string,
  thumbnail: string,
  tags: string[],
}
export interface Album {
  id: string,
  title: string,
  description?: string,
  owner: string,
  created: string,
  thumbnail: string,
  images: { [key: string]: Image },
  published: boolean,
  tags: string[],
}
export interface AlbumState {
  offset: number
  limit: number
  fetched: number
  more: boolean
  status: 'idle' | 'loading' | 'failed'
  data: { [key: string]: Album }
}

const initialState: AlbumState = {
  offset: 0,
  limit: 10,
  fetched: 0,
  more: false,
  status: 'idle',
  data: {},
}

export const loadGallery = createAsyncThunk(
  'gallery/fetchGallery', async ({ offset, limit }: { offset: number, limit: number }, { getState }) => {
    const state = getState() as RootState
    if (offset > state.gallery.fetched - 1) {
      const response = await fetchGallery(offset, limit)
      return response
    } else {
      return null
    }
  }
)
export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGallery.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadGallery.fulfilled, (state, action) => {
        state.status = 'idle'
        if (action.payload) {
          state.offset = action.payload.offset
          state.limit = action.payload.limit
          state.more = action.payload.more
          state.data = { ...state.data, ...action.payload.data }
          state.fetched = Object.keys(state.data).length
        }
      })
      .addCase(loadGallery.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { setOffset } = gallerySlice.actions
export const selectAlbum = (state: RootState) => state.gallery.data
export const selectAlbumKeys = (state: RootState) => Object.keys(state.gallery.data).sort()
export const selectAlbumMore = (state: RootState) => state.gallery.more
export const selectAlbumStatus = (state: RootState) => state.gallery.status
export default gallerySlice.reducer