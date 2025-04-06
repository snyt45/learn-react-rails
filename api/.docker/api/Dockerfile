FROM ruby:3.3.3-alpine
ENV TZ Asia/Tokyo
# 必要なパッケージをインストール
RUN apk update && \
    apk add --no-cache \
      build-base \
      postgresql-dev \
      tzdata \
      vim \
      # M1 Macでのエラー対策
      gcompat \
      bash

WORKDIR /api
COPY ../../../Gemfile* /api/
RUN bundle install

