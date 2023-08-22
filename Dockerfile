
	FROM node:19-bullseye
	WORKDIR /usr/src/app
	
	# Copy all the files from your file system to the container file system
	COPY package*.json ./
	
	# Install all dependencies
	RUN npm install
	
	# Expose the port
	EXPOSE 4500
	
	# Command to execute when the image is instantiated
	CMD ["npm","run", "start"]