# Nodejs-Form-input-File-Upload-Using-Multer
This is an app to take user form data as input and take post data as input along with .jpeg and .png image file upload

### Steps to use this app
- Clone this app using the following command
```
    git clone https://github.com/jchy/Nodejs-Form-input-File-Upload-Using-Multer.git
```
- Install the node_modules using following command
```
    npm install
```
- Now run the server on your system by the following command
```
    npm run server
```
- To get the all the users open the postman and use GET method at following route
```
    http://localhost:5000/users
```
- To Create a new user open the postman and use POST method at following route
```
    http://localhost:5000/users
```
- To create a post with single image upload open the postman and use POST method at 
```
    http://localhost:5000/posts/single 
```
- To create a post with multiple image upload open the postman and use POST method at 
```
    http://localhost:5000/posts/multiple
```
