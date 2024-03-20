FROM nikolaik/python-nodejs:latest

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml requirements.txt ./

RUN npm install -g pnpm

RUN pnpm install

RUN pip install -r requirements.txt

COPY . .

EXPOSE 4000

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["pnpm", "dev"]
