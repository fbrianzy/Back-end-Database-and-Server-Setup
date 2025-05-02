# Gunakan image resmi Node.js sebagai base image
FROM node:18

# Set working directory di dalam container
WORKDIR /usr/src/app

# Copy file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies aplikasi
RUN npm install

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi saat container dimulai
CMD ["node", "server.js"]
