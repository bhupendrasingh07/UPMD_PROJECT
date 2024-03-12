import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ContentPage from './components/ContentPage';
import Layout from './components/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import EditNiche from './components/EditNiche';
import Profile from './components/Profile';
import PublicRoutes from "./Routes/PublicRoutes";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AdminHome from './components/Admin/AdminHome';


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes> }  />
        <Route path="/register" element={<PublicRoutes><Register/></PublicRoutes>} />
        <Route path="/admin" element={<AdminHome></AdminHome>} />
        <Route
          path="/"
          element={
             <ProtectedRoute>
             <Layout />
             </ProtectedRoute>
            
          }
        >
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
          
        </Route>
      </Routes>
    
    </>
  );
}
export default App