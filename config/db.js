require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		// Database connection
		const con = await mongoose.connect(process.env.MONGO_CONNECTION_URL, { 
			useNewUrlParser: true, 
			useUnifiedTopology: true,
			// useCreateIndex: true, 
			// useFindAndModify: true 
		});

		console.log(`Database connected. ${con.connection.host}`);

	} catch(err) {
		console.log('Connection failed.', err);
		process.exit(1);
	}
}

module.exports = connectDB;