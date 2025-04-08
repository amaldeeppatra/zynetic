# The Books API
## Setup
npm install - install all necessary dependencies and modules
npm run dev or node index.js - run command
Server will start on http://localhost:5000

## API Endpoints
Go to http://localhost:5000/api

/auth - User Authentication Routes

/book - Book Routes

/auth/signup - Signing Up New User

/auth/login - Logging In Existing User

/book/create - Create A New Book

/book/getAll - Fetch All Books

/book/getAll?rating=4.5 - Query parameters for filtering purposes

/book/getAll?sortOrder=Desc - Sorting In Descending Order By Rating

/book/getAll?title=book 1 - Query parameter for searching any book by title (partial search)

/book/id/:bookId - Fetch A Book By Its Id

/book/update/:bookId - Update A Book By Its Id

/book/delete/:bookId - Delete A Book By Its Id

### API DOCS
Go to http://localhost:5000/api-docs for API documentation.

## NOTE:
You can create an account or use this test email and password

email - abc@gmail.com

password - 123

After that use the bearer token obtained by login to use the book routes.

## ENV FILE
Keep the .env file as:

PORT=5000

mongodbUrl='mongodb+srv://amaldeeppatra21:fDmue9IOrkMMd73h@misc.so69yms.mongodb.net/zynetic?retryWrites=true&w=majority&appName=misc'

jwtsecretkey='fnwjeongojreg'

You may use any other MongoDB URL. The above one is for testing purpose.