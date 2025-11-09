import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Layouts from "./layouts/Layouts.jsx";
import Home from "./pages/home/Home.jsx";
import PostDetail from "./pages/posts/postDetail/PostDetail.jsx";
import UserProfile from "./pages/users/UserProfile.jsx";
import Registration from "./pages/auth/Registration.jsx";
import Login from "./pages/auth/Login.jsx";
import Logout from "./pages/auth/Logout.jsx";
import AuthorPosts from "./pages/posts/authorPosts/AuthorPosts.jsx";
import EditPost from "./pages/posts/editPost/EditPost.jsx";
import Dashposrd from "./pages/dashboard/DashBoard.jsx";
import CategoryPosts from "./pages/posts/categoryPosts/CategoryPosts.jsx";
import Authors from "./pages/users/Authors.jsx";
import CreatePost from "./pages/posts/createPost/CreatePost.jsx";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layouts />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="posts/users/:id" element={<AuthorPosts />} />
            <Route path="posts/:id/edit" element={<EditPost />} />
            <Route path="myposts/:id" element={<Dashposrd />} />
            <Route
                path="posts/categories/:category"
                element={<CategoryPosts />}
            />
            <Route path="profile/:id" element={<UserProfile />} />
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="authors" element={<Authors />} />
            <Route path="create" element={<CreatePost />} /> //
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
