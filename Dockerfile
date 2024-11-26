# Use a imagem oficial do Node.js
FROM node:18

# Diretório de trabalho
WORKDIR /usr/src/api

# Copiar os arquivos package.json e package-lock.json
COPY . .
COPY ./.env.production ./.env
# Instalar as dependências
RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

# Expor a porta usada pela API
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "run", "start:dev"]
