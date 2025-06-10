import { Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bnb-violet text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BNB Informa */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bnb-green">BNB Informa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Noticias</a></li>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bnb-green">Contactos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Agencias y Sucursales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consejos de seguridad y procesos de accesos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Atención al cliente</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Punto de Reclamo</a></li>
            </ul>
          </div>

          {/* Trabaja con Nosotros */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bnb-green">Trabaja con Nosotros</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Postula a nuestras vacantes</a></li>
            </ul>
            <div className="mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Código de ética</a>
            </div>
            <div className="mt-2">
              <a href="#" className="text-bnb-green hover:text-bnb-green-light transition-colors">Cashback BNB</a>
            </div>
          </div>

          {/* Contenidos Financieros */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bnb-green">Contenidos Financieros</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Informes de RSE</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tarifario</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">BNB Firmas-Formularios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Prevención y cumplimiento</a></li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">

          {/* Memorias-Estados Financieros */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bnb-green">Memorias-Estados Financieros</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Memorias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Memorias RSE</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Memoria Anual 2023</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Estados Financieros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Estados Financieros BNB Leasing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Certificado-Calificación Riesgo</a></li>
            </ul>
          </div>

          {/* Licitaciones Seguros Colectivos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bnb-green">Licitaciones Seguros Colectivos</h4>
            <h5 className="font-medium mb-2">Licitación Seguro de Desgravamen</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Convocatoria 2023</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pliego de Bases y Condiciones 2023</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consultas y Aclaraciones 2023</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resultados 2023</a></li>
            </ul>
          </div>

          {/* Educación Financiera */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bnb-green">Educación Financiera</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Descubre Plataforma de Educación Financiera</a></li>
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-6 text-bnb-green">Adquisiciones</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sistema de adquisiciones</a></li>
            </ul>
          </div>

          {/* Video Tutoriales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bnb-green">Video Tutoriales</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tutoriales BNB</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Punto Educación Financiera</a></li>
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-6 text-bnb-green">Otros</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Corresponsales no financieros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bienes Adjudicados</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media and Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-bnb-green">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Lines */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-bnb-green">Líneas de Atención</h4>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <Phone className="w-5 h-5" />
                <span>7878 7272 - 800 17 7272</span>
              </div>
            </div>

            {/* Mobile Apps */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-bnb-green">Aplicaciones Móviles</h4>
              <div className="flex space-x-4">
                <a href="#" className="block">
                  <img
                    src="https://ext.same-assets.com/2715094947/3967141228.png"
                    alt="Download on App Store"
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="https://ext.same-assets.com/2715094947/1572188838.png"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Todos los Derechos Reservados 2025 - Banco Nacional de Bolivia S.A.
          </p>
          <p className="text-gray-400 text-sm">
            Entidad supervisada por ASFI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
