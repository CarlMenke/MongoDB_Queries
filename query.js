const db = require('./db')
const { Book, Publisher } = require('./models')
const mongoose = require('mongoose')

async function main() {
  try {
        await consoleBooks()     
        await findBook()
        await createBook()
        await updateBook()
        await findBook()
        await deleteBook()
        await consoleBooks()

  } catch (error) {
    console.log(error)
  } finally {
    await db.close()   
}
}


async function findBook() {
    const book = await Book.find({published_date: '2005'})
    console.log('book = ', book)
    console.log('GET book ran')
}

async function createBook() {

  const harperCollins = await Publisher.find({ name: 'HarperCollins' })

  const book = {
    title: 'Carls Book',
    author: "Juaquin lesi",
    published_date: '10/3/20',
    publisher_id: harperCollins[0]._id
  }

  Book.create(book)

  console.log('POST book ran')

}

async function updateBook() {
  const res = await Book.updateOne({published_date: '2005'}, {title:"The Power Of Now 2"})

  console.log(res)
  console.log('ran PUT function')
}

async function deleteBook() {
  const res = await Book.deleteOne({title:"The Alchemist"})

  console.log('res', res)
}

async function consoleBooks() {
  await console.log( await Book.find({}))
}

main()

