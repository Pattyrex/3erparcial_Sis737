import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BancaPersonas from './components/BancaPersonas';
import Login from './components/Login';

type View = 'home' | 'login';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const handleLoginAccess = () => {
    setCurrentView('login');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  if (currentView === 'login') {
    return <Login onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLoginClick={handleLoginAccess} />

      {/* Main content area with Banca Personas */}
      <main className="flex-1">
        <BancaPersonas />
      </main>

      <Footer />
    </div>
  );
  
}

export default App;
