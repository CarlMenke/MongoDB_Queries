const db = require('./db')
const { Book } = require('./models')

async function main() {
  try {
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()