
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './component/SignupForm';  

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignupForm />} />
            </Routes>
        </Router>
    );
}

export default App;
