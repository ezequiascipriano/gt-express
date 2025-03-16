
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Map, Phone, Clock, MapPin, Car, Droplets, Brush, Zap, Wrench, Sparkles, Lightbulb } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3357e944-10ec-4faf-b056-532b057d634b.png" 
              alt="GT Express Lava Rápido" 
              className="h-16 w-auto"
            />
          </div>
          
          <button 
            className="lg:hidden text-blue-600 text-2xl"
            onClick={toggleMenu}
          >
            ☰
          </button>
          
          <nav className={`lg:block ${isMenuOpen ? 'block fixed top-20 left-0 w-full bg-white shadow-md py-4' : 'hidden'} lg:static lg:shadow-none lg:w-auto`}>
            <ul className="flex lg:flex-row flex-col items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <li>
                <Link 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500}
                  className="text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="services" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500}
                  className="text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500}
                  className="text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Lava Rápido GT Express</h1>
            <p className="text-xl mb-8 text-blue-50">
              Qualidade, agilidade e excelência para seu veículo com o melhor atendimento da região
            </p>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-semibold inline-block transition-all cursor-pointer"
            >
              Nossos Serviços
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/3357e944-10ec-4faf-b056-532b057d634b.png" 
              alt="GT Express Lava Rápido" 
              className="w-80 h-auto object-contain rounded-lg bg-white/10 p-6"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block">
              Nossos Serviços
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 mt-2"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                <Car className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Lavagem Convencional</h3>
                <p className="text-gray-600">
                  Limpeza completa do seu veículo, garantindo aparência renovada e cuidado profissional.
                </p>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                <Droplets className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Ducha com Secagem e Pretinho</h3>
                <p className="text-gray-600">
                  Lavagem rápida com aplicação de pretinho nos pneus para um acabamento perfeito e brilhante.
                </p>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                <Brush className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Higienização de Bancos</h3>
                <p className="text-gray-600">
                  Limpeza profunda dos bancos automotivos, eliminando ácaros, bactérias e odores indesejados.
                </p>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Higienização de Teto</h3>
                <p className="text-gray-600">
                  Limpeza especializada do teto automotivo, removendo manchas e sujeiras para um interior renovado.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Lavagem de Motor</h3>
                <p className="text-gray-600">
                  Limpeza especializada do compartimento do motor, removendo sujeira e resíduos para melhor desempenho.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                <Wrench className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Restauração de Plásticos Externos</h3>
                <p className="text-gray-600">
                  Recuperação de plásticos externos do veículo, devolvendo cor e brilho para parachoques e molduras.
                </p>
              </div>
            </div>

            {/* Service 7 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Restauração de Plásticos Internos</h3>
                <p className="text-gray-600">
                  Recuperação e hidratação dos plásticos internos do veículo, renovando seu interior com acabamento profissional.
                </p>
              </div>
            </div>

            {/* Service 8 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                <Lightbulb className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Restauração de Faróis</h3>
                <p className="text-gray-600">
                  Recuperação de faróis amarelados ou opacos, melhorando a visibilidade e a estética do seu veículo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block">
              Entre em Contato
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 mt-2"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">Informações de Contato</h3>
              
              {/* Address */}
              <div className="flex mb-6">
                <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Endereço</h4>
                  <p className="text-gray-600 mb-2">Av. Antônio Mathias de Camargo, 929 - Centro, Cotia - SP, 06715-125</p>
                  <a 
                    href="https://maps.app.goo.gl/1mmGyJ5ADuqpCB2K9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="flex mb-6">
                <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">Agende seu serviço ou tire dúvidas pelo nosso WhatsApp</p>
                  <a 
                    href="https://wa.me/5511911369211" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (11) 91136-9211
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex">
                <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sábado: 08:00 - 18:00</p>
                  <p className="text-gray-600">Domingo: 08:00 - 13:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9726363023266!2d-46.92319302380651!3d-23.613334463517295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa3df28bb3c01%3A0xcd9db5fa7ac46f30!2sAv.%20Ant%C3%B4nio%20Mathias%20de%20Camargo%2C%20929%20-%20Centro%2C%20Cotia%20-%20SP%2C%2006700-000!5e0!3m2!1spt-BR!2sbr!4v1717518341756!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="GT Express Lava Rápido Localização"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 relative inline-block pb-2">
                Sobre Nós
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
              </h3>
              <p className="text-gray-400">
                GT Express Lava Rápido oferece serviços de lavagem e higienização automotiva com qualidade e agilidade. Estamos no mercado há mais de 5 anos, sempre priorizando a satisfação dos nossos clientes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 relative inline-block pb-2">
                Links Rápidos
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="services" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 relative inline-block pb-2">
                Contato
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5 mr-2" />
                  <span className="text-gray-400">
                    Av. Antônio Mathias de Camargo, 929 - Centro, Cotia - SP
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-500 mr-2" />
                  <a 
                    href="https://wa.me/5511911369211" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (11) 91136-9211
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GT Express Lava Rápido. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511911369211" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contato via WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="white" 
          className="w-8 h-8"
        >
          <path 
            d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0c3.2.004 6.195 1.248 8.45 3.51 2.254 2.262 3.5 5.27 3.496 8.475-.004 6.556-5.336 11.891-11.893 11.891-1.99-.001-3.951-.5-5.688-1.448l-6.35 1.572z"
            fill="#25D366"
          />
          <path 
            d="M12.05 21.133c1.703 0 3.373-.446 4.833-1.284l.347-.207-1.802-.93.311.18c-1.242.684-2.656 1.05-4.126 1.05-4.713 0-8.55-3.837-8.55-8.55 0-2.362.982-4.553 2.622-6.125a8.455 8.455 0 015.928-2.424c4.713 0 8.549 3.836 8.549 8.55 0 1.798-.574 3.51-1.67 4.96-.854 1.125-2.052 2.003-3.436 2.553l-.348.137 1.513 1.04-.298-.141c-1.458.724-3.096 1.101-4.713 1.101H12.05zm0-19.573a9.987 9.987 0 00-7.103 2.995c-1.895 1.895-2.944 4.329-2.944 6.962 0 1.662.419 3.269 1.214 4.692L2.01 20.431l4.442-1.102a9.963 9.963 0 004.708 1.182h.002c5.561 0 10.073-4.512 10.073-10.074 0-5.561-4.513-10.074-10.074-10.074l-.011.002z"
            fill="white"
          />
          <path 
            d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.967-.273-.099-.472-.148-.671.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.671-1.612-.92-2.207-.242-.579-.487-.5-.671-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
};

export default Index;
