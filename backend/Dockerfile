FROM php:8.2-fpm

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libpq-dev

# Instalar extensiones de PHP
RUN docker-php-ext-install pdo pdo_pgsql pgsql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configurar directorio de trabajo
WORKDIR /var/www
COPY . .

# Instalar dependencias sin ejecutar scripts que conecten a BD
RUN composer install --no-dev --optimize-autoloader --no-scripts

# COMANDO FINAL: Solo arrancar el servidor
# Usamos el puerto 10000 que es el estándar de Render
CMD php artisan serve --host=0.0.0.0 --port=10000 #variable de entorno en web service