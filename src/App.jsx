import './app.css';
import { FloatingBar } from './Components/FloatingBar/FloatingBar';
import { Navbar } from './Components/Navbar/Navbar';
import { WidgetDiagnosis } from './Components/Widgets/WidgetDiagnosis';
import { WidgetHealth } from './Components/Widgets/WidgetHealth';
import { WidgetTyres } from './Components/Widgets/WidgetTyres';

function App() {
    return (
        <div className="app">
            <Navbar/>

            <main>
                <WidgetHealth/>
                <WidgetTyres/>
                <WidgetDiagnosis/>
            </main>

            <FloatingBar/>
        </div>
    );
}

export default App;
