# MongoDB Setup for Windows

## Option 1: Install MongoDB locally (Recommended for development)

### Step 1: Download and Install MongoDB
1. Go to: https://www.mongodb.com/try/download/community
2. Select Windows version
3. Download and run the installer
4. Choose "Complete" installation
5. Check "Install MongoDB as a Service"
6. Check "Install MongoDB Compass" (optional GUI tool)

### Step 2: Start MongoDB Service
```bash
# Open Command Prompt as Administrator
net start MongoDB
```

### Step 3: Verify Installation
```bash
# Check MongoDB version
mongod --version

# Connect to MongoDB
mongo
```

### Step 4: Update .env file
Your .env file should have:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/libspace
JWT_SECRET=libspace_secret_key_123456789
```

## Option 2: Use MongoDB Atlas (Cloud Database)

### Step 1: Create Free Account
1. Go to: https://www.mongodb.com/atlas
2. Sign up for free account
3. Create a free cluster (choose a region close to you)

### Step 2: Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. It will look like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/`

### Step 3: Update .env file
```env
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/libspace
JWT_SECRET=libspace_secret_key_123456789
```

## Option 3: Use Docker (if you have Docker)

```bash
# Pull and run MongoDB container
docker run -d -p 27017:27017 --name mongodb mongo

# Verify it's running
docker ps
```

## Troubleshooting

### MongoDB Service Won't Start
```bash
# Check if service exists
sc query MongoDB

# Manually start service
net start MongoDB

# Check logs
Get-EventLog -LogName Application -Source "MongoDB" | Select-Object -First 10
```

### Connection Refused Error
1. Make sure MongoDB service is running
2. Check if port 27017 is available
3. Verify firewall isn't blocking MongoDB
4. Check connection string in .env file

### Permission Issues
1. Run Command Prompt as Administrator
2. Check MongoDB data directory permissions
3. Ensure your user has access to MongoDB folders

## Quick Test Commands

After installation, test your connection:

```bash
# Test connection
mongo --eval "db.adminCommand('ismaster')"

# Create test database
mongo libspace --eval "db.createCollection('test')"

# List databases
mongo --eval "show dbs"
```

## Next Steps

Once MongoDB is set up and running:

1. **Restart your server**: `npm start`
2. **Test the APIs**: Follow the steps in `demo-without-db.js`
3. **Use Postman**: Copy the requests from the demo output

## GUI Tools (Optional)

- **MongoDB Compass** (comes with installation)
- **Studio 3T** (free version available)
- **Robo 3T** (free)

These tools help you visualize your data and databases.

---

💡 **Pro Tip**: For development, local MongoDB is faster and doesn't require internet. For production, use MongoDB Atlas.
