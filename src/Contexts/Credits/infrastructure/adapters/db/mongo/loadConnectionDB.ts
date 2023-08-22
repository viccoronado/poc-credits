import mongoose, { ConnectOptions } from "mongoose";

export default function loadConnectionDB(url: string) {
	let db: typeof mongoose | undefined = undefined

	return {
		start: async () => {
			try {
				mongoose.set('strictQuery', false)
				db = await mongoose.connect(url, {
					useNewUrlParser: true,
					useUnifiedTopology: true,
				} as ConnectOptions)
				console.log(`- Connected to MongoDB on ${db.connection.name} ✅`)
			} catch (e) {
				console.log(`- Error trying to connect to MongoDB ${e.message}`)
				let error
				if (typeof e.type === 'undefined' || typeof e.target === 'undefined') {
					error = new Error(`- Error: e.type || e.target is undefined`)
				} else {
					error = e
				}
				throw error
			}
		},
		close: async () => {
			if (db) await db.disconnect()
			console.log(`- Closed MongoDB connection`)
		},
	}
}