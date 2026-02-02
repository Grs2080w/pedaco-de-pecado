# 🍰 Pedaço de Pecado - Landing Page

Esta é a landing page oficial da Pedaço de Pecado, uma doceria e cafeteria artesanal localizada em Presidente Prudente - SP. O projeto foi desenvolvido com foco em conversão via WhatsApp, experiência do usuário (UX) e design responsivo.

## 🚀 Tecnologias Utilizadas

 - React.js: Biblioteca principal para a interface.
 - Tailwind CSS: Framework utilitário para estilização rápida e responsiva.
 - Lucide React: Biblioteca de ícones leves e elegantes.
 - Shadcn/UI: Componentes de interface (Button, Card) para consistência visual.


## ✨ Funcionalidades
- Header Fixo: Navegação sempre visível com acesso rápido ao botão de pedidos.

- Galeria de Produtos: Exibição em grid dos doces e cafés com efeitos de zoom no hover.

- Integração com WhatsApp: Botões estratégicos que abrem conversa direta com uma mensagem personalizada.

- Depoimentos: Prova social com avaliações de clientes.

- Localização: Seção dedicada com informações de endereço, horários e mapa integrado.

- Design Responsivo: Totalmente adaptado para dispositivos móveis, tablets e desktops.

## 📁 Estrutura de Pastas

```Plaintext
src/
├── components/
│   └── ui/            # Componentes base (Botões, Cards)
├── pages/
│   └── Home.jsx       # Componente principal da Landing Page
├── public/            # Imagens e logotipos (SVG/JPG)
└── index.html             # Ponto de entrada da aplicação
```

## 🛠️ Como Executar o Projeto

1. Clone o repositório:

```Bash
git clone https://github.com/seu-usuario/pedaco-de-pecado.git
```

2. Instale as dependências:
```Bash
npm install
# ou
yarn install
```
Certifique-se de ter as imagens na pasta /public: O código referencia imagens como /1.jpg, /fora.jpg, etc. Certifique-se de que esses arquivos existam no diretório público.

3. Inicie o servidor de desenvolvimento:

```Bash
npm run dev
```

### 🎨 Personalização de Cores

O projeto utiliza uma paleta personalizada no Tailwind. Certifique-se de que seu arquivo tailwind.config.js contenha as definições para:

- cream: Fundo suave.
- chocolate: Textos e elementos principais.
- rose-dusty: Destaques e botões de ação.
- gold: Estrelas de avaliação e detalhes do footer.
