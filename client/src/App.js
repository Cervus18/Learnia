import './App.css';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing'
import Footer from './Components/Layout/Footer';
import Course from './Components/Courses/Course';
import Register from './Components/Register'
import SignIn from './Components/SignIn';
import Instructor from './Components/Instructor/Instructor'
import Lecture from './Components/Lecture/Lecture';
import AdminHome from './Components/Admin/AdminHome';
import InsctructorsDashboard from './Components/Admin/Instructors/InsctructorsDashboard';
import CoursesDashboard from './Components/Admin/Courses/CoursesDashboard';
import CourseVideos from './Components/Admin/Courses/CourseVideos';
import AddCourse from './Components/Admin/Courses/AddCourse';
import MyCourses from './Components/Courses/MyCourses';
import { loadUser } from './Redux/actions/auth';
import { useEffect } from 'react';
import PrivateRoute  from './routes/PrivateRoute';
import AdminRoute from './routes/AdminRoute';


// Redux
import { Provider } from 'react-redux';
import store from './Redux/store';


function App() {
  


  
  useEffect(() => {
    store.dispatch(loadUser())
   
  }, [])
  


  return (
  <Provider store={store}>
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/course/:courseId" element={<Course/>}/>
        <Route exact path="/register/" element={<Register/>}/>
        <Route exact path="/sign-in/" element={<SignIn/>}/>
        <Route exact path="/instructor/:instructorId" element={<Instructor/>}/>
        <Route exact path="/lecture/:courseId" element={<PrivateRoute><Lecture/></PrivateRoute>}/>
        <Route exact path="/my-courses/" element={<PrivateRoute><MyCourses/></PrivateRoute>}/>
        <Route exact path="/admin/home" element={<AdminRoute><AdminHome/></AdminRoute>}/>
        <Route exact path="/admin/home/instructors" element={<AdminRoute><InsctructorsDashboard/></AdminRoute>}/>
        <Route exact path="/admin/home/courses" element={<AdminRoute><CoursesDashboard/></AdminRoute>}/>
        <Route exact path="/admin/home/courses/:courseId/lectures" element={<AdminRoute><CourseVideos/></AdminRoute>}/>
        <Route exact path="/admin/home/courses/add-course" element={<AdminRoute><AddCourse/></AdminRoute>}/>









      </Routes>
      <Footer/>
    </div>
  </Router>
  </Provider>
  );
}

export default App;
