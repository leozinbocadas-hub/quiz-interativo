# Quiz Interativo - Panetone Lucrativo

Quiz interativo completo com 13 etapas para captura de leads e conversão de vendas.

## 🚀 Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo desenvolvimento:
```bash
npm run dev
```

3. Para build de produção:
```bash
npm run build
```

## 📋 Funcionalidades

- ✅ 13 etapas interativas do quiz
- ✅ Coleta de dados do usuário (nome, idade, motivações)
- ✅ Barra de progresso visual
- ✅ Personalização com nome do usuário
- ✅ Contagem regressiva na etapa final
- ✅ Notificações de compra fake (social proof)
- ✅ FAQ expansível
- ✅ Design responsivo
- ✅ Placeholders para imagens (prontos para substituição)
- ✅ Links para checkout configuráveis

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── steps/          # Componentes de cada etapa (Step1 a Step13)
│   ├── Button.jsx      # Botão reutilizável
│   ├── OptionButton.jsx # Botão de opção para seleção
│   ├── ProgressBar.jsx # Barra de progresso
│   ├── Logo.jsx        # Logo do quiz
│   ├── ImagePlaceholder.jsx # Placeholder para imagens
│   ├── FAQ.jsx         # Componente FAQ
│   ├── PurchaseNotification.jsx # Notificações de compra
│   └── Quiz.jsx        # Componente principal do quiz
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Configurações

### Links de Checkout

Edite o arquivo `src/components/steps/Step13.jsx` e substitua a variável `checkoutUrl` pelos seus links reais:

```javascript
const checkoutUrl = 'https://seu-link-de-checkout.com'
```

### Notificações de Compra Fake

As notificações são geradas automaticamente a cada 15 segundos. Você pode ajustar:
- Intervalo de tempo em `Step13.jsx` (linha do `setInterval`)
- Nomes na lista `names`
- Quantidade de vagas disponíveis

### Imagens

Substitua os componentes `ImagePlaceholder` pelos seus componentes de imagem reais quando tiver as imagens prontas.

## 📱 Responsividade

O projeto é totalmente responsivo e funciona bem em:
- Desktop
- Tablet
- Mobile

## 🎯 Próximos Passos

1. Adicionar as imagens reais substituindo os placeholders
2. Configurar os links de checkout reais
3. Integrar com sistema de captura de leads (se necessário)
4. Adicionar analytics (Google Analytics, Facebook Pixel, etc.)

## 📝 Licença

Este projeto foi criado para uso comercial.

