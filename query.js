const db = require('./db')
const { Book } = require('./models')

async function main() {
  try {
     await findBook()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
}
}


async function findBook() {

    const book = await Book.find({title:"The Power of Now"})
    console.log('book', book)

    
    // console.log(await Book.find({title:"The Power of Now"}))


}
main()

