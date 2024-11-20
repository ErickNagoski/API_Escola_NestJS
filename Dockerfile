# Use a imagem oficial do Node.js
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da API
COPY . .

# Expor a porta usada pela API
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "run", "start:dev"]
