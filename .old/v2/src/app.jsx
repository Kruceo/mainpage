import {Router,Path,E404} from 'milhas'
import { useState } from 'preact/hooks'
import './app.css'
import { Homepage } from './assets/components/builds/Homepage'
import ERR404 from './assets/components/builds/404'
import Wallpaper from './assets/components/essentials/Wallpaper'
import Projects from './assets/components/builds/Projects'
import Info from './assets/components/builds/Info'
import MediaQuery from './assets/components/essentials/MediaQuery'
import Loading from './assets/components/essentials/Loading'
import ChatRGB from './assets/components/builds/project/ChatRGB'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Wallpaper></Wallpaper>
      <MediaQuery>
        <Router >

          <Path as="/" absolute>
            <Homepage />
          </Path>

          <Path as="/projects" absolute>
            <Projects />
          </Path>
          <Path as="/projects/:project" absolute>
            <Projects />
          </Path>

          <Path as="/info" absolute>
            <Info />
          </Path>
          <Path as="/chatrgb" absolute>
            <ChatRGB />
          </Path>
          <E404>
            <ERR404></ERR404>
          </E404>

          <Path as="/wallpaper" absolute>
            <Wallpaper></Wallpaper>
          </Path>
          <Path as="/loading" absolute>
            <Loading></Loading>
          </Path>
        </Router>


      </MediaQuery>
    </>
  )
}
