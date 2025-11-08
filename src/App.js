import './App.css';
import React, { useState, createContext } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

// context create karo 
export const ThemeContext = createContext();

const App = () => {
  const pageSize = 15;

  const [progress, setProgress] = useState(0)
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Router>
        <NavBar />
        {/* <News pageSize={pageSize} country="us" category="sports" /
          > */}
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />

        <Routes>

          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />

          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />

          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />

          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />

          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />

          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />

          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />

          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />


        </Routes>

      </Router>
        </div>
      </ThemeContext.Provider>

    </div>
  )
}
export default App;




// ********************************************************************



// import './App.css';
// import React, { useState } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoadingBar from "react-top-loading-bar";

// const App = () => {
//   const pageSize = 12;
//   const [progress, setProgress] = useState(0);
//   // Removed unused isMobile state

//   return (
//     <div className="app">
//       <Router>
//         <NavBar />

//         {/* Modern Loading Bar */}
//         <LoadingBar
//           height={4}
//           color='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
//           progress={progress}
//           style={{
//             zIndex: 9999,
//             boxShadow: '0 2px 10px rgba(102, 126, 234, 0.3)'
//           }}
//         />

//         <main className="main-content">
//           <Routes>
//             <Route exact path="/" element={
//               <News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />
//             } />

//             <Route exact path="/business" element={
//               <News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />
//             } />

//             <Route exact path="/entertainment" element={
//               <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />
//             } />

//             <Route exact path="/general" element={
//               <News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />
//             } />

//             <Route exact path="/health" element={
//               <News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />
//             } />

//             <Route exact path="/science" element={
//               <News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />
//             } />

//             <Route exact path="/sports" element={
//               <News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />
//             } />

//             <Route exact path="/technology" element={
//               <News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />
//             } />
//           </Routes>
//         </main>

//         {/* Optional Footer */}
//         <footer className="app-footer">
//           <div className="footer-content">
//             <p>&copy; 2024 NewsApp. Stay informed with the latest news from around the world.</p>
//             <div className="footer-links">
//               <span>Built with React</span>
//               <span>•</span>
//               <span>Modern UI</span>
//               <span>•</span>
//               <span>Responsive Design</span>
//             </div>
//           </div>
//         </footer>
//       </Router>
//     </div>
//   )
// }

// export default App;




// // **********************************************************************


