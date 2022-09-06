const mongoose = require('mongoose')
const BookSchema = require('./book')
const PublisherSchema = require('./publisher')

const Book = mongoose.model('books', BookSchema)
const Publisher = mongoose.model('publishers', PublisherSchema)

module.exports = {
  Book,
  Publisher
}