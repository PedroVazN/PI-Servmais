# 🎯 SERV+ - Plataforma de Skill Pods

Plataforma para contratação de freelancers individuais e Skill Pods (equipes modulares de 2-4 profissionais complementares).

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Estrutura CSS](#estrutura-css)
- [Rotas](#rotas)
- [Componentes](#componentes)

---

## 🚀 Sobre o Projeto

**SERV+** é uma plataforma inovadora que conecta empresas e clientes a profissionais qualificados, oferecendo duas modalidades de contratação:

- **Freelancers**: Profissionais individuais para tarefas específicas
- **Skill Pods**: Equipes modulares pré-selecionadas para projetos completos

---

## 📁 Estrutura do Projeto

```
PI-Servmais/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── Assets/          # Imagens e SVGs
│   ├── componentes/     # Componentes React
│   │   ├── Header.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── DateTimeOverlay.jsx / .css
│   │   ├── Login.jsx / .css
│   │   ├── Cadastro.jsx / .css
│   │   ├── Servico.jsx / .css
│   │   ├── Skillpods.jsx / .css
│   │   ├── Monstarequipe.jsx / .css
│   │   ├── Administrativo.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.js           # Componente principal e rotas
│   ├── App.css          # Estilos globais
│   ├── index.js         # Ponto de entrada
│   └── index.css        # Reset CSS global
├── package.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- **React** 18.x
- **React Router DOM** (navegação entre páginas)
- **CSS3** (estilização modular)
- **JavaScript ES6+**
- **Create React App**

---

## 📦 Instalação

### Pré-requisitos

- Node.js 14+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd PI-Servmais
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

---

## 🎨 Estrutura CSS

A estrutura CSS foi completamente reorganizada para ser modular e escalável:

- **`index.css`**: Reset global
- **`App.css`**: Estilos globais compartilhados
- **Componentes/\*.css**: Estilos específicos de cada componente

Para mais detalhes, consulte [ESTRUTURA-CSS.md](./ESTRUTURA-CSS.md)

### Padrão de Cores

```css
/* Paleta de Cores Principal */
--roxo-escuro: #2A1B3D;
--roxo-medio: #422F71;
--roxo-claro: #553C9A;
--roxo-destaque: #6B46C1;
--branco: #FFFFFF;
```

---

## 🗺️ Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | Hero + DateTimeOverlay | Página inicial |
| `/login` | Login | Página de login |
| `/cadastro` | Cadastro | Página de cadastro |
| `/servico` | Servico | Lista de freelancers |
| `/skillpods` | Skillpods | Lista de Skill Pods |
| `/contratar` | Monstarequipe | Montagem de equipe |
| `/adm` | Administrativo | Área administrativa |

---

## 🧩 Componentes

### Header
- Navegação principal
- Logo
- Botões de ação (Login/Cadastro)
- Menu mobile responsivo

### Hero
- Banner principal
- Call-to-action
- Estatísticas
- Vídeo demonstrativo

### DateTimeOverlay
- Widget de data/hora
- Posicionamento fixo

### Login
- Formulário de login
- Validação
- Links de recuperação

### Cadastro
- Formulário de cadastro
- Seleção de tipo de conta (Usuário/Freelancer)
- Campos dinâmicos

### Servico
- Grid de freelancers
- Cards informativos
- Footer

### Skillpods
- Grid de Skill Pods
- Informações das equipes
- Footer

### Monstarequipe
- Carrossel de Skill Pods
- Cards de serviços
- Comparativo Freelancers vs Skill Pods
- Popup de detalhes

### Administrativo
- Cards administrativos
- Links para áreas específicas

### Footer
- Links rápidos
- Informações de contato
- Copyright

---

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints para:

- **Mobile**: < 480px
- **Tablet**: < 768px
- **Desktop**: < 1024px
- **Large Desktop**: > 1024px

---

## 🔄 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm start

# Cria build de produção
npm run build

# Executa testes
npm test

# Ejeta as configurações (irreversível)
npm run eject
```

---

## 📝 Próximos Passos

- [ ] Integração com backend/API
- [ ] Autenticação e autorização
- [ ] Sistema de pagamentos
- [ ] Chat em tempo real
- [ ] Sistema de avaliações
- [ ] Filtros avançados
- [ ] Dashboard de métricas
- [ ] Modo escuro

---

## 👥 Equipe

Desenvolvido por estudantes do curso de Análise e Desenvolvimento de Sistemas

---

## 📄 Licença

Este projeto é privado e de uso acadêmico.

---

## 📞 Contato

- Email: servmais@gmail.com
- Telefone: (11) 99999-9999

---

**Última atualização**: Novembro 2024

