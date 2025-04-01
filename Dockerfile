# Step 1: Build Angular App
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build --prod

# Step 2: Serve App Using NGINX
FROM nginx:1.25-alpine
COPY --from=build /app/dist/YOUR_PROJECT_NAME /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
