FROM node:16.10.0-alpine

ENV TZ=Asia/Tokyo
RUN apk --no-cache add tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# WORKDIR命令で、/app内へ移動
WORKDIR /app

# COPY命令で、ホストマシンのpackage.jsonをコンテナ内にコピー
COPY ./package*.json ./

# RUN命令で、コンテナ内で、yarn installを実行し、moduleインストール
RUN yarn install

# COPY命令で、ホストマシンのファイルをすべてコンテナにコピー
COPY . .



