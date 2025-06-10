import { CreditCard, PiggyBank, Shield, Heart, Smartphone, Users, TrendingUp, DollarSign } from 'lucide-react';

const BancaPersonas = () => {
  const products = [
    {
      title: "Créditos",
      description: "Saber más",
      icon: DollarSign,
      image: "https://ext.same-assets.com/2715094947/1053849617.png",
      color: "bg-bnb-green"
    },
    {
      title: "Tarjetas de crédito",
      description: "Saber más",
      icon: CreditCard,
      image: "https://ext.same-assets.com/2715094947/289765096.png",
      color: "bg-bnb-violet"
    },
    {
      title: "Ahorro e inversión",
      description: "Saber más",
      icon: PiggyBank,
      image: "https://ext.same-assets.com/2715094947/298108513.png",
      color: "bg-bnb-green"
    },
    {
      title: "Servicios",
      description: "Saber más",
      icon: Smartphone,
      image: "https://ext.same-assets.com/2715094947/2376434410.png",
      color: "bg-bnb-violet"
    },
    {
      title: "Seguros",
      description: "Saber más",
      icon: Shield,
      image: "https://ext.same-assets.com/2715094947/134466058.png",
      color: "bg-bnb-green"
    },
    {
      title: "Servicios digitales",
      description: "Saber más",
      icon: Users,
      image: "https://ext.same-assets.com/2715094947/263998926.png",
      color: "bg-bnb-violet"
    }
  ];

  const exchangeRates = [
    { currency: "Dólar Compra", rate: "6.85" },
    { currency: "Dólar Venta", rate: "6.97" },
    { currency: "UFV", rate: "2.71822" }
  ];

  const referenceRates = [
    { label: "TRe M.N.", rate: "3.08" },
    { label: "M.V.DOL.", rate: "2.72" },
    { label: "M.N. UFV", rate: "0.08" },
    { label: "M.E.", rate: "0.64" }
  ];

  return (
    <div className="bg-bnb-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bnb-green to-bnb-green-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Desde <span className="text-6xl">1872</span></h1>
            <p className="text-xl mb-8">Al servicio de Bolivia</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-bnb-green px-8 py-3 rounded-lg font-semibold hover:bg-bnb-light transition-colors">
                Solicita tus productos en línea
              </button>
              <button className="bg-bnb-violet text-white px-8 py-3 rounded-lg font-semibold hover:bg-bnb-purple transition-colors">
                Video Banca
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Products Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bnb-dark mb-4">Tenemos el <span className="text-bnb-green">producto para ti</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`${product.color} h-40 flex items-center justify-center`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-32 max-w-32 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-bnb-dark mb-2">{product.title}</h3>
                  <button className="text-bnb-green hover:text-bnb-green-light font-medium">
                    {product.description} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Campaign Banners */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cashback Campaign */}
          <div className="bg-gradient-to-r from-bnb-green to-bnb-green-light rounded-lg p-8 text-white">
            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/2715094947/1925526889.png"
                alt="Cashback BNB"
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">Ganadores de la campaña</h3>
                <p className="mb-4">Conoce más sobre Cashback BNB</p>
                <button className="bg-white text-bnb-green px-6 py-2 rounded-lg font-semibold hover:bg-bnb-light transition-colors">
                  Conoce más aquí
                </button>
              </div>
            </div>
          </div>

          {/* QR Digital */}
          <div className="bg-bnb-violet rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Hazte cliente nuestro</h3>
            <p className="mb-4">y solicita tu código QR, todo de forma 100% digital.</p>
            <div className="flex items-center space-x-4">
              <button className="bg-bnb-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-bnb-green-light transition-colors">
                Solicita el tuyo aquí
              </button>
              <span className="bg-bnb-green text-white px-3 py-1 rounded-lg text-sm">Nueva</span>
            </div>
          </div>
        </section>

        {/* Video Banca & Digital Services */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-bnb-green mb-2">Video Banca del BNB</h3>
            <p className="text-bnb-gray mb-4">Ahora puedes ir al banco por video</p>
            <button className="text-bnb-green hover:text-bnb-green-light font-medium">
              ¡Ingresa ahora! →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-bnb-green mb-2">Digitaliza tus tarjetas BNB</h3>
            <p className="text-bnb-gray mb-4">y comienza a pagar con tu celular.</p>
            <img
              src="https://ext.same-assets.com/2715094947/1082471266.png"
              alt="Red Enlace"
              className="w-24 h-8 mb-2"
            />
            <p className="text-sm text-bnb-gray">*Disponible para android con funcionalidad NFC</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-bnb-green mb-2">Crédito para vivienda social</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-bnb-green" />
                <span className="text-sm">Plazos flexibles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-bnb-green" />
                <span className="text-sm">Asesoramiento personalizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-bnb-green" />
                <span className="text-sm">Para sectores de industria, comercio y servicios</span>
              </div>
            </div>
            <button className="bg-bnb-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-bnb-green-light transition-colors">
              Solicítalo aquí
            </button>
          </div>
        </section>

        {/* Exchange Rates */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-bnb-dark mb-6">Tipos de Cambio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {exchangeRates.map((rate, index) => (
                <div key={index} className="text-center p-4 bg-bnb-light rounded-lg">
                  <div className="text-lg font-semibold text-bnb-dark">{rate.currency}</div>
                  <div className="text-2xl font-bold text-bnb-green">{rate.rate}</div>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-semibold text-bnb-dark mb-4">Tasa Referencial TRe</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {referenceRates.map((rate, index) => (
                <div key={index} className="text-center p-3 border border-bnb-green-bg rounded-lg">
                  <div className="text-sm font-medium text-bnb-gray">{rate.label}</div>
                  <div className="text-lg font-bold text-bnb-green">{rate.rate}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Information Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/2715094947/4284255622.jpeg"
              alt="Responsabilidad Social"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-bnb-dark mb-2">Responsabilidad Social</h3>
              <p className="text-bnb-gray mb-4">Para el Banco Nacional de Bolivia S.A. la Responsabilidad Social Empresarial (RSE) es parte de la gestión estratégica del negocio...</p>
              <button className="text-bnb-green hover:text-bnb-green-light font-medium">
                Saber más →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/2715094947/1333214077.jpeg"
              alt="Educación Financiera"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-bnb-dark mb-2">Educación Financiera</h3>
              <p className="text-bnb-gray mb-4">El programa de Educación Financiera, Aprendiendo con el BNB, tiene el objetivo de mejorar la cultura financiera...</p>
              <button className="text-bnb-green hover:text-bnb-green-light font-medium">
                Saber más →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/2715094947/871991005.jpeg"
              alt="Bienes Adjudicados"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-bnb-dark mb-2">Bienes Adjudicados</h3>
              <p className="text-bnb-gray mb-4">Aprovecha los bienes a la venta que tenemos para ti. Busca y encuentra los inmuebles, vehículos, maquinaria...</p>
              <button className="text-bnb-green hover:text-bnb-green-light font-medium">
                Saber más →
              </button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-bnb-green rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Línea gratuita ATC: <span className="text-3xl">800-10-3060</span></h3>
          <p className="text-lg">Consultas e información</p>
        </section>
      </div>
    </div>
  );
};

export default BancaPersonas;
