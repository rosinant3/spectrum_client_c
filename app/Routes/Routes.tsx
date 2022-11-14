import { Routes, Route } from "react-router-dom";
import HomeRoute from './HomeRoute/HomeRoute';
import BlogRoute from './BlogRoute/BlogRoute';
import SingInRoute from './SingInRoute/SingInRoute';
import ProfileRoute from './ProfileRoute/ProfileRoute';
import ProfileBulletinRoute from './ProfileRoute/Bulletin/ProfileBulletinRoute';
import ProfileBlogRoute from './ProfileRoute/Blog/ProfileBlogRoute';
import ProfileEditBlogRoute from './ProfileRoute/Blog/EditBlogRoute/ProfileEditBlogRoute';
import ProfileCatalogRoute from './ProfileRoute/Catalog/ProfileCatalogRoute';
import ProfileCasesRoute from './ProfileRoute/Cases/ProfileCasesRoute';
import ProfileHazardsRoute from './ProfileRoute/Hazards/ProfileHazardsRoute';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomeRoute />}></Route>
        <Route path="/blog" element={<BlogRoute />}></Route>
        <Route path="/login" element={<SingInRoute />}></Route>
        <Route path="/profile" element={<ProfileRoute />}></Route>
        <Route path="/profile/bulletin" element={<ProfileBulletinRoute />}></Route>
        <Route path="/profile/blog" element={<ProfileBlogRoute />}></Route>
        <Route path="/profile/blog/post" element={<ProfileEditBlogRoute />}  ></Route>
        <Route path="/profile/blog/post/:id" element={<ProfileEditBlogRoute />}  ></Route>
        <Route path="/profile/catalog" element={<ProfileCatalogRoute />}></Route>
        <Route path="/profile/cases" element={<ProfileCasesRoute />}></Route>
        <Route path="/profile/hazards" element={<ProfileHazardsRoute />}></Route>
    </Routes>
  );
}

export default AppRoutes;
