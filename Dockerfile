FROM node:14

WORKDIR /root/example
COPY . .
RUN npm install

EXPOSE 8080
CMD ["npm", "start"]
