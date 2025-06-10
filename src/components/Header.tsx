import { Search, User, Building2 } from 'lucide-react';

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="bg-bnb-green text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-4">
              <a href="#" className="hover:text-bnb-green transition-colors">Open Banking</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-bnb-green transition-colors">Trabaja con nosotros</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-bnb-green transition-colors">Atención al cliente</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-bnb-green transition-colors">Agencias y Sucursales</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-bnb-green transition-colors">Mapa del Sitio</a>
            </nav>

            {/* Search */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Búsqueda personalizada"
                  className="bg-white text-black px-3 py-1 rounded text-sm w-60"
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              <select className="bg-white text-black px-2 py-1 rounded text-sm">
                <option>Relevance</option>
                <option>Date</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="color: bg-bnb-green">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Products */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://ext.same-assets.com/2715094947/78952513.png"
                  alt="BNB Logo"
                  className="h-10"
                />
                
            <div className="bg-bnb-green text-white">
                <div className="max-w-7xl mx-auto px-4">
                <nav className="flex items-center space-x-8 py-3">
                    <a href="#" className="hover:text-bnb-light transition-colors font-medium">Personas</a>
                    <span className="text-bnb-green-bg">|</span>
                    <a href="#" className="hover:text-bnb-light transition-colors font-medium">Empresas</a>
                    <span className="text-bnb-green-bg">|</span>
                    <a href="#" className="hover:text-bnb-light transition-colors font-medium">Grupo</a>
                </nav>
                </div>
            </div>                
            
              </div>
            </div>

            {/* Access Buttons */}
            <div className="flex items-center space-x-4">
            <button
                onClick={onLoginClick}
                className="bg-bnb-violet hover:bg-bnb-violet-hover text-white px-6 py-2 rounded-md flex items-center space-x-2 transition-colors"
            >
                <User className="w-4 h-4" />
                <span>Acceso a Banca Personas</span>
            </button>
            <button
                onClick={onLoginClick}  // <-- aquí se agrega
                className="bg-bnb-violet hover:bg-bnb-violet-hover text-white px-6 py-2 rounded-md flex items-center space-x-2 transition-colors"
            >
                <Building2 className="w-4 h-4" />
                <span>Acceso a Banca Empresas</span>
            </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      {/* <div className="bg-violet-700 bg-opacity-75 text-white">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>📱 Solicita tus productos en línea</span>
            <span>🎥 Video Banca</span>
        </div>
      </div>
       */}

      {/* Secondary Navigation (Products) */}
      <div className="bg-bnb-violet text-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-center space-x-8 py-2 text-sm">
            <a href="#" className="hover:text-bnb-light transition-colors">Créditos</a>
            <a href="#" className="hover:text-bnb-light transition-colors">Tarjetas de Crédito</a>
            <a href="#" className="hover:text-bnb-light transition-colors">Ahorro e Inversión</a>
            <a href="#" className="hover:text-bnb-light transition-colors">Servicios</a>
            <a href="#" className="hover:text-bnb-light transition-colors">Beneficios</a>
            <a href="#" className="hover:text-bnb-light transition-colors">Seguros</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
