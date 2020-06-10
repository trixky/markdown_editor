FROM node:14
 
WORKDIR /usr/src/app
 
# Copies package.json and package-lock.json
COPY package*.json ./
 
# Installs all node packages
RUN npm install

# Installs serve package
RUN npm install -g serve

# Copies everything
COPY . .

# Build production react server
RUN npm run build
 
# Uses port which is used by the actual application
EXPOSE 3000
 
# Finally runs the application
CMD serve -s build -l 3000

# ----------------------------------------------------------------- #
# - Build:                                                          #
#             sudo docker build -t markdown_editor .                #
# - Run:                                                            #
#             sudo docker run -it --rm -p 3001:3000 markdown_editor #
# - Connect:                                                        #
#             http:/localhost:3001                                  #
# ----------------------------------------------------------------- #