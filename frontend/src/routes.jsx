import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import App from "./App";
import EditNiche from "./components/EditNiche";
import ContentPage from "./components/ContentPage";
import Profile from "./components/Profile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";



  

const router=createBrowserRouter(createRoutesFromElements(
  
    <Route path="/" element={<App></App>}>
      
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="register" element={<Register></Register>}></Route>

       <Route  path="portal" element={<ContentPage></ContentPage>}>
             {/* <Route index element={<EditNiche></EditNiche>}></Route> */}
               <Route path="link" element={<EditNiche></EditNiche>}></Route>
                <Route path="page" >
                    <Route path="guides" element={<EditNiche></EditNiche>}></Route>
                    <Route path="ppc" element={<EditNiche></EditNiche>}></Route>
                </Route>
                <Route path="report" element={<EditNiche></EditNiche>}></Route>
                <Route path="profile" element={<Profile></Profile>}></Route>
       </Route>

       <Route path="order"  >
         <Route path="guest-post" element={<EditNiche></EditNiche>}></Route>
         <Route path="niche-edit" element={<EditNiche></EditNiche>}></Route>
         <Route path="authority-link" element={<EditNiche></EditNiche>}></Route>
         <Route path="brand-link" element={<EditNiche></EditNiche>}></Route>
         <Route path="haro" element={<EditNiche></EditNiche>}></Route>
         <Route path="press-release" element={<EditNiche></EditNiche>}></Route>
         <Route path="citation-auit" element={<EditNiche></EditNiche>}></Route>
         <Route path="citation-building" element={<EditNiche></EditNiche>}></Route>
         <Route path="citation-cleanup" element={<EditNiche></EditNiche>}></Route>
         <Route path="website-audit" element={<EditNiche></EditNiche>}></Route>
         <Route path="content-strategy" element={<EditNiche></EditNiche>}></Route>
         <Route path="keyword-search" element={<EditNiche></EditNiche>}></Route>
         <Route path="backlink-gap-analysis" element={<EditNiche></EditNiche>}></Route>
         <Route path="seo-package" element={<EditNiche></EditNiche>}></Route>
         <Route path="seo-bumdles" element={<EditNiche></EditNiche>}></Route>
         <Route path="seo-hours" element={<EditNiche></EditNiche>}></Route>
         <Route path="content" element={<EditNiche></EditNiche>}></Route>
         <Route path="brief" element={<EditNiche></EditNiche>}></Route>
       </Route>

       <Route path="*" element={<h2>Page Not Found</h2>}></Route>
    </Route>

))

export default  router