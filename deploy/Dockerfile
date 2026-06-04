FROM nginx:alpine

# Custom config: port 8080, non-root pid path, logs to stdout/stderr
COPY deploy/nginx.conf /etc/nginx/nginx.conf

# Copy static site (forum-api, deploy files, and secrets excluded via .dockerignore)
COPY . /usr/share/nginx/html

# Allow uid 1000 to write nginx cache/logs and create pid file
RUN chown -R 1000:1000 \
      /var/cache/nginx \
      /var/log/nginx \
      /usr/share/nginx/html && \
    touch /tmp/nginx.pid && \
    chown 1000:1000 /tmp/nginx.pid

USER 1000
EXPOSE 8080
