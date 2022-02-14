import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'
import { fetchAlbum } from './AlbumAPI'

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
  images: Image[],
  published: boolean,
  tags: string[],
}
export interface AlbumState {
  offset: number
  limit: number
  fetched: number
  more: boolean
  status: 'idle' | 'loading' | 'failed'
  data: Album[]
}

const initialState: AlbumState = {
  offset: 0,
  limit: 10,
  fetched: 0,
  more: false,
  status: 'idle',
  data: [],
}

export const loadAlbum = createAsyncThunk(
  'album/fetchAlbum', async ({ offset, limit }: { offset: number, limit: number }, { getState }) => {
    const state = getState() as RootState
    if (offset > state.album.fetched - 1) {
      const response = await fetchAlbum(offset, limit)
      return response
    } else {
      return null
    }
  }
)
export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAlbum.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadAlbum.fulfilled, (state, action) => {
        state.status = 'idle'
        if (action.payload) {
          state.offset = action.payload.offset
          state.limit = action.payload.limit
          state.more = action.payload.more
          state.data = [...state.data, ...action.payload.data]
          state.fetched = state.data.length
        }
      })
      .addCase(loadAlbum.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { setOffset } = albumSlice.actions
export const selectAlbum = (state: RootState) => state.album.data
export const selectAlbumMore = (state: RootState) => state.album.more
export const selectAlbumStatus = (state: RootState) => state.album.status
export default albumSlice.reducer