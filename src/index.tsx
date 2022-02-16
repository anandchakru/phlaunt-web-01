import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
// import { Album } from './features/album/Album'
// import { Albums } from './features/album/Albums_tsx'
// import { GalleryHome } from './features/gallery/AlbumGallery'
import { AlbumHome } from './features/album/AlbumHome'
import { AlbumImgView } from './features/gallery/AlbumImgView'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/gallery" />}>
            {/* <Route path="album" element={<Albums />}>
              <Route path=":albumId" element={<Album />} />
            </Route> */}
          </Route>
          <Route path="gallery" element={<App />}>
            <Route path="album/:albumId" element={<AlbumHome />} />
            <Route path="album/:albumId/img/:imgId" element={<AlbumImgView />} />
          </Route>
          <Route
            path="*"
            element={<div>404</div>}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
