import React from "react";
import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const Home = () => {
  const whatsappNumber = "5518981269363";
  const whatsappMessage =
    "Olá! Gostaria de fazer um pedido na Pedaço de Pecado";

  const products = [
    {
      id: 1,
      image: "/1.jpg",
      alt: "Torta especial com chantilly",
    },
    {
      id: 2,
      image: "/2.jpg",
      alt: "Café especial",
    },
    {
      id: 3,
      image: "/3.jpg",
      alt: "Bolo artesanal",
    },
    {
      id: 4,
      image: "/4.jpg",
      alt: "Doces decorados",
    },
    {
      id: 5,
      image: "/5.jpg",
      alt: "Sobremesa especial",
    },
    {
      id: 6,
      image: "/6.jpg",
      alt: "Café especial",
    },
    {
      id: 8,
      image: "/8.jpg",
      alt: "Doces decorados",
    },
    {
      id: 9,
      image: "/9.jpg",
      alt: "Torta especial com chantilly",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Os melhores bolos e doces de Presidente Prudente e região, com toda certeza!",
      author: "Cliente satisfeito",
    },
    {
      id: 2,
      text: "Comida maravilhosa e atendimento nota mil com preços super acessíveis.",
      author: "Cliente fiel",
    },
    {
      id: 3,
      text: "Excelente atendimento, produtos maravilhosos, ambiente incrível lindo demais😘",
      author: "Avaliação Google",
    },
  ];

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-chocolate">
            {/* Pedaço de Pecado*/}
            <img
              src="/Pedaço de Pecado.svg"
              alt="Logo"
              className="w-52 text-red-500"
            />
          </h1>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-rose-dusty hover:bg-rose-dusty/90 text-white transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 h-4 w-4" />
            Fazer Pedido
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-cream">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-chocolate mb-6 leading-tight">
            Onde o carinho se transforma em{" "}
            <span className="text-rose-dusty">sabor</span>
          </h2>
          <p className="text-xl md:text-2xl text-chocolate/70 mb-8 max-w-2xl mx-auto">
            Os melhores bolos e doces de Presidente Prudente e região
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-rose-dusty hover:bg-rose-dusty/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Fazer Pedido no WhatsApp
            </Button>
            <div className="flex items-center gap-2 text-chocolate/60">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm">4.9 • 77 avaliações</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-chocolate mb-6">
                Um momento especial em cada visita
              </h3>
              <p className="text-lg text-chocolate/70 mb-6 leading-relaxed">
                Na Av. Ana Jacinta, transformamos um simples café em uma
                experiência inesquecível. Nosso ambiente acolhedor e atendimento
                nota mil fazem cada cliente se sentir em casa.
              </p>
              <p className="text-lg text-chocolate/70 leading-relaxed">
                Cada bolo, cada doce e cada café são preparados com carinho e
                dedicação, usando ingredientes selecionados para garantir o
                melhor sabor.
              </p>
              <div className="mt-8 flex items-center gap-4 text-rose-dusty">
                <Clock className="h-6 w-6" />
                <div>
                  <p className="font-semibold text-chocolate">
                    Horário de Funcionamento
                  </p>
                  <p className="text-chocolate/70">
                    Terça a Domingo • Fechado às segundas
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="fora.jpg"
                alt="Interior da cafeteria"
                className="rounded-lg shadow-lg w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_sweet-corner-6/artifacts/3oruxojw_unnamed%20%286%29.jpg"
                alt="Decoração da cafeteria"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-chocolate mb-4">
              Nossos Produtos Artesanais
            </h3>
            <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
              Bolos artesanais, doces gourmet e cafés especiais preparados com
              amor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-0 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-chocolate/70 mb-6">Preço médio: R$ 20 - R$ 40</p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-rose-dusty hover:bg-rose-dusty/90 text-white px-8 transition-all duration-300 hover:scale-105"
            >
              Ver Mais no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-chocolate mb-4">
              O que nossos clientes dizem
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-rose-100 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-chocolate/80 mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-rose-dusty font-semibold">
                    — {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-chocolate mb-4">
              Visite Nossa Loja
            </h3>
            <p className="text-lg text-chocolate/70">
              Estamos esperando por você!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-rose-dusty flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-chocolate mb-2">
                        Endereço
                      </h4>
                      <p className="text-chocolate/70">
                        Av. Ana Jacinta, 2683
                        <br />
                        Presidente Prudente - SP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-rose-dusty flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-chocolate mb-2">
                        Horário
                      </h4>
                      <p className="text-chocolate/70">
                        Terça a Domingo
                        <br />
                        Fechado às segundas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-rose-dusty flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-chocolate mb-2">
                        Contato
                      </h4>
                      <p className="text-chocolate/70">(18) 98126-9363</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-chocolate/60 mb-4">
                      • Refeição no local
                      <br />
                      • Para viagem
                      <br />• Entrega sem contato
                    </p>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-rose-dusty hover:bg-rose-dusty/90 text-white transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Fazer Pedido pelo WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.8947458832795!2d-51.43186!3d-22.12558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f5f5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sAv.%20Ana%20Jacinta%2C%202683%20-%20Presidente%20Prudente%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Pedaço de Pecado"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chocolate text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex sm:justify-start md:justify-around gap-8 mb-8 flex-wrap">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-gold min-w-40 shrink">
                Pedaço de Pecado
              </h4>
              <p className="text-white/70">
                Doceria e Cafeteria Artesanal em Presidente Prudente
              </p>
            </div>
            <div className="w-fit">
              <h5 className="font-semibold mb-4 text-gold">Contato</h5>
              <p className="text-white/70 mb-2">
                Av. Ana Jacinta, 2683
                <br />
                Presidente Prudente - SP
              </p>
              <p className="text-white/70">(18) 98126-9363</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-gold">Redes Sociais</h5>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/pedaco_de_pecado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>
              © 2024 Pedaço de Pecado Doceria e Cafeteria. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
