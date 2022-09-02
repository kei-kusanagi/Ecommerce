#!/bin/zsh

brew install asdf

## Python
asdf plugin-add python
asdf install python 3.10.4
# asdf local python 3.10.4
# python -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt

## NodeJS
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs lts-gallium
(cd frontend && asdf local nodejs lts-gallium)
# To install these dependencies from scratch for webpack + babel_loader + postcss + tailwind + etc
# cd frontend
# npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env style-loader css-loader postcss postcss-loader postcss-preset-env tailwindcss
# o bien:
(cd frontend && npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env style-loader css-loader postcss postcss-loader postcss-preset-env tailwindcss)
# cd ../
(cd frontend && npm install --save-dev)
(cd frontend && npm run build)
# (cd frontend && npm start)

python manage.py runserver