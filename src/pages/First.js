import './First.scss';
import Login from './login/login'
import Sliders from './sliders/Sliders'
function First() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container-box">
                    <h1>Invision</h1>
                    <aside><Sliders /></aside>
                    <main>
                        <Login />
                    </main>
                </div>
            </header>
        </div>
    );
}

export default First;