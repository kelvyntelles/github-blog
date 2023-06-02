import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";

import { PostPage } from "./pages/Post";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>  
  )
}