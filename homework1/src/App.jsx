import React from 'react';
import Header from './components/header'
import Menu from './components/menu'
import Footer from './components/footer';
import './components/web-style.css'

function App() {
    return (
        <div className="App">
            <Menu />
            <Header />
            <main>
            <h2>Main Content Areas</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </main>
            <Footer />
        </div>
    );
}

export default App;