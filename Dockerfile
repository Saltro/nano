FROM nginx

RUN rm -r ./dist/stats.json
COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/nano.conf

EXPOSE 80
