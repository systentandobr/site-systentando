# Estágio 1: Build da aplicação React com Vite
FROM node:20-alpine AS build

# Configurações do npm
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Criar e mudar para o diretório da aplicação
WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm@latest

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar pacotes
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . ./

# Criar arquivo .env com variáveis VITE_* do ambiente Railway
# O Railway disponibiliza automaticamente as variáveis de ambiente durante o build
# O Vite lê automaticamente variáveis que começam com VITE_ do ambiente ou do arquivo .env
RUN env | grep "^VITE_" > .env || touch .env

# Build da aplicação
# As variáveis VITE_* estarão disponíveis tanto do ambiente quanto do arquivo .env
RUN pnpm run build

# Estágio 2: Servir aplicação com Caddy
FROM caddy:alpine

# Criar e mudar para o diretório da aplicação
WORKDIR /app

# Copiar Caddyfile para a imagem do container
COPY Caddyfile ./

# Validar e formatar Caddyfile
RUN caddy fmt Caddyfile --overwrite

# Copiar arquivos compilados do estágio de build
COPY --from=build /app/dist ./dist

# Usar Caddy para executar/servir a aplicação
CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
