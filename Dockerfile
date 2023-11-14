FROM mcr.microsoft.com/playwright:v1.39.0-jammy 

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install --force
RUN npm i dotenv --force
RUN npx playwright install --force