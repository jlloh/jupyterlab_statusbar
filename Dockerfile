FROM python:3.7-slim

RUN pip install jupyterlab==2.0.0

RUN apt-get update && apt-get install -y --no-install-recommends nodejs npm

WORKDIR /app

COPY app /app

RUN jlpm && jlpm build && jupyter labextension install .

ENTRYPOINT ["jupyter", "lab", "--allow-root", "--no-browser", "--ip", "0.0.0.0", "--port", "8888"]
