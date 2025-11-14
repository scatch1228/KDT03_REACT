import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hello from './01/Hello'
import MyClock from './02/MyClock'
import MyDiv1 from './03/MyDiv1'
import MyList from './04/MyList'
import MyToggle from './05/MyToggle'
import Lotto from './06/Lotto'
import Header from './components/Header'
import Footer from './components/Footer'
import Food from './07/Food'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import MyRef from './11/MyRef'
import MyCal from './12/MyCal'
import MyGallery from './13/MyGallery'
import MyFestival from './14/MyFestival'
import FestivalContents from './14/FestivalContents'
import JotaiFestival from './14-2/JotaiFestival'
import RouteMain from './15/RouteMain'
import ChargeInfo from './16/ChargeInfo'
import ChargeInfo2 from './16/ChargerInfo2'
import ChargerDetail from './16/ChargerDetail'
import JotaiCnt from './17/JotaiCnt'
import TodoList from './18/TodoList'
import TodoList2 from './18-1/TodoList2'
import TodoList3 from './18-2/TodoList3'
import TodoList4 from './18-3/TodoList4'
import Subway from './20/Subway'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-y-hidden'>
        {<Header />}
        <main className='container mx-auto flex flex-col flex-grow overflow-y-scroll'>
          {/* <Hello/> */}
          {/*<MyClock/>*/}
          {/*<MyDiv1/> */}
          {/*<MyList/>*/}
          {/*<MyToggle />*/}
          {/*<Lotto/>*/}
          {/*<Food/>*/}
          {/*<MyEffect/>*/}
          {/*<BoxOffice/>*/}
          {/*<Traffic/>*/}
          {/*<MyRef/>*/}
          {/*<MyCal/>*/}
          {/*<MyGallery/>*/}
          {/*<MyFestival/>*/}
          {/*<RouteMain/>*/}
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/Lotto" element={<Lotto />} />
            <Route path="/Food" element={<Food />} />
            <Route path="/BoxOffice" element={<BoxOffice />} />
            <Route path="/Traffic" element={<Traffic />} />
            <Route path="/Cal" element={<MyCal />} />
            <Route path="/Gallery" element={<MyGallery />} />
            <Route path="/Festival" element={<MyFestival />} />
            <Route path='/JotaiFestival' element={<JotaiFestival/>}/>
            <Route path="/Festival/Content" element={<FestivalContents />} />
            <Route path="/ChargeInfo" element={<ChargeInfo />} />
            <Route path="/ChargeInfo2" element={<ChargeInfo2 />} />
            <Route path="/ChargerInfo2/Detail" element={<ChargerDetail />} />
            <Route path="/JotaiCnt" element={<JotaiCnt />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/TodoList2" element={<TodoList2 />} />
            <Route path="/TodoList3" element={<TodoList3 />} />
            <Route path="/TodoList4" element={<TodoList4 />} />
            <Route path="/Subway" element={<Subway />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
