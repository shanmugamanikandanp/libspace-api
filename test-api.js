// LibSpace API Test Script
// Run this with: node test-api.js

import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:5000';

// Test data
const testUser = {
    name: "Chandana",
    email: "chandana3@gmail.com",
    password: "123456"
};

const testBook = {
    url: "www.libspacebook.com",
    title: "think like a monk",
    author: "jay shetty"
};

let authToken = '';
let bookId = '';

async function testAPI() {
    console.log('🚀 Testing LibSpace API...\n');

    try {
        // 1. Register User
        console.log('1️⃣ Registering User...');
        const registerResponse = await fetch(`${BASE_URL}/api/authuser/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testUser)
        });
        const registerData = await registerResponse.json();
        console.log('✅ Register Response:', registerData);

        // 2. Login User
        console.log('\n2️⃣ Logging in User...');
        const loginResponse = await fetch(`${BASE_URL}/api/authuser/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: testUser.email, password: testUser.password })
        });
        const loginData = await loginResponse.json();
        authToken = loginData.token;
        console.log('✅ Login Response:', loginData);

        if (!authToken) {
            console.log('❌ No token received. Cannot continue with protected routes.');
            return;
        }

        // 3. Add Book
        console.log('\n3️⃣ Adding Book...');
        const addBookResponse = await fetch(`${BASE_URL}/api/book/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(testBook)
        });
        const addBookData = await addBookResponse.json();
        console.log('✅ Add Book Response:', addBookData);

        // 4. Get All Books
        console.log('\n4️⃣ Getting All Books...');
        const getBooksResponse = await fetch(`${BASE_URL}/api/book/`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
        const getBooksData = await getBooksResponse.json();
        console.log('✅ Get All Books Response:', getBooksData);

        // Get book ID from the response
        if (getBooksData.length > 0) {
            bookId = getBooksData[0]._id;
            console.log('📖 Using Book ID:', bookId);
        }

        // 5. Get Specific Book
        if (bookId) {
            console.log('\n5️⃣ Getting Specific Book...');
            const getBookResponse = await fetch(`${BASE_URL}/api/book/${bookId}`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            const getBookData = await getBookResponse.json();
            console.log('✅ Get Book Response:', getBookData);

            // 6. Update Book
            console.log('\n6️⃣ Updating Book...');
            const updateBookResponse = await fetch(`${BASE_URL}/api/book/${bookId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ title: "New Book Title" })
            });
            const updateBookData = await updateBookResponse.json();
            console.log('✅ Update Book Response:', updateBookData);

            // 7. Delete Book
            console.log('\n7️⃣ Deleting Book...');
            const deleteBookResponse = await fetch(`${BASE_URL}/api/book/${bookId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            const deleteBookData = await deleteBookResponse.json();
            console.log('✅ Delete Book Response:', deleteBookData);
        }

        // 8. Logout
        console.log('\n8️⃣ Logging out...');
        const logoutResponse = await fetch(`${BASE_URL}/api/authuser/logout`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
        const logoutData = await logoutResponse.json();
        console.log('✅ Logout Response:', logoutData);

        console.log('\n🎉 All tests completed!');

    } catch (error) {
        console.error('❌ Error during testing:', error.message);
    }
}

// Check if server is running
async function checkServer() {
    try {
        const response = await fetch(`${BASE_URL}/`);
        const data = await response.json();
        console.log('✅ Server is running:', data.message);
        testAPI();
    } catch (error) {
        console.log('❌ Server is not running. Please start the server with: npm start');
        console.log('❌ Also make sure MongoDB is installed and running.');
    }
}

checkServer();
