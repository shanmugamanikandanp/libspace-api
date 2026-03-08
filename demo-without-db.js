// Demo script to show API endpoints without MongoDB
// This shows you exactly what requests to make in Postman

console.log('🎯 LibSpace API Demo - Copy these requests to Postman:\n');

console.log('📋 STEP 1: Register User');
console.log('Method: POST');
console.log('URL: http://localhost:5000/api/authuser/register');
console.log('Headers: Content-Type: application/json');
console.log('Body:');
console.log(JSON.stringify({
    "name": "Chandana",
    "email": "chandana3@gmail.com", 
    "password": "123456"
}, null, 2));
console.log('\n' + '='.repeat(50) + '\n');

console.log('📋 STEP 2: Login User');
console.log('Method: POST');
console.log('URL: http://localhost:5000/api/authuser/login');
console.log('Headers: Content-Type: application/json');
console.log('Body:');
console.log(JSON.stringify({
    "email": "chandana3@gmail.com",
    "password": "123456"
}, null, 2));
console.log('\n⚠️  Copy the "token" from the response for next steps!\n');
console.log('='.repeat(50) + '\n');

console.log('📋 STEP 3: Add Book');
console.log('Method: POST');
console.log('URL: http://localhost:5000/api/book/add');
console.log('Headers:');
console.log('  Content-Type: application/json');
console.log('  Authorization: Bearer <PASTE_TOKEN_FROM_STEP_2>');
console.log('Body:');
console.log(JSON.stringify({
    "url": "www.libspacebook.com",
    "title": "think like a monk",
    "author": "jay shetty"
}, null, 2));
console.log('\n' + '='.repeat(50) + '\n');

console.log('📋 STEP 4: Get All Books');
console.log('Method: GET');
console.log('URL: http://localhost:5000/api/book/');
console.log('Headers: Authorization: Bearer <YOUR_TOKEN>');
console.log('\n' + '='.repeat(50) + '\n');

console.log('📋 STEP 5: Get Specific Book');
console.log('Method: GET');
console.log('URL: http://localhost:5000/api/book/<BOOK_ID>');
console.log('Headers: Authorization: Bearer <YOUR_TOKEN>');
console.log('\n⚠️  Replace <BOOK_ID> with the _id from Step 4 response\n');
console.log('='.repeat(50) + '\n');

console.log('📋 STEP 6: Update Book');
console.log('Method: PUT');
console.log('URL: http://localhost:5000/api/book/<BOOK_ID>');
console.log('Headers:');
console.log('  Content-Type: application/json');
console.log('  Authorization: Bearer <YOUR_TOKEN>');
console.log('Body:');
console.log(JSON.stringify({
    "title": "New Book Title"
}, null, 2));
console.log('\n' + '='.repeat(50) + '\n');

console.log('📋 STEP 7: Delete Book');
console.log('Method: DELETE');
console.log('URL: http://localhost:5000/api/book/<BOOK_ID>');
console.log('Headers: Authorization: Bearer <YOUR_TOKEN>');
console.log('\n' + '='.repeat(50) + '\n');

console.log('📋 STEP 8: Logout');
console.log('Method: POST');
console.log('URL: http://localhost:5000/api/authuser/logout');
console.log('Headers: Authorization: Bearer <YOUR_TOKEN>');
console.log('\n' + '='.repeat(50) + '\n');

console.log('🎯 QUICK SETUP INSTRUCTIONS:');
console.log('1. Install MongoDB locally OR use MongoDB Atlas');
console.log('2. Update .env file with your MONGO_URI');
console.log('3. Restart server: npm start');
console.log('4. Copy these requests to Postman and test!');
console.log('\n💡 TIP: Your server is already running at http://localhost:5000');
