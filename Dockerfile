# Usa la imagen de node.js versión 14 como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json en el directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos del proyecto en el directorio de trabajo
COPY . .

# Construye la aplicación en modo de producción
RUN npm run build

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Inicia la aplicación
CMD [ "npm", "start" ]