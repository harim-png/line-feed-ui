import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import TestMember1 from './pages/test/TestMember1'
import TestMember2 from './pages/test/TestMember2'
import TestMember3 from './pages/test/TestMember3'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="w-[375px] h-[812px] bg-white shadow-2xl overflow-hidden relative">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/test/member1" element={<TestMember1 />} />
            <Route path="/test/member2" element={<TestMember2 />} />
            <Route path="/test/member3" element={<TestMember3 />} />
          </Routes>

          {/* Dev Navigation - 개발 중에만 보임 */}
          {import.meta.env.DEV && (
            <nav className="absolute bottom-2 left-2 bg-black/80 text-white text-xs rounded p-2 z-50">
              <div className="flex gap-2">
                <Link to="/" className="hover:underline">Main</Link>
                <Link to="/test/member1" className="hover:underline">M1</Link>
                <Link to="/test/member2" className="hover:underline">M2</Link>
                <Link to="/test/member3" className="hover:underline">M3</Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
