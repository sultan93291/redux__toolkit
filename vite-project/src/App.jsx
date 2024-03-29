import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  
} from "react-router-dom";
import Home from "./Sections/Home/Home";
import Blog from "./Sections/Blog/Blog";
import About from "./Sections/About/About";
import RootLayout from "./Layout/RootLayout";




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
