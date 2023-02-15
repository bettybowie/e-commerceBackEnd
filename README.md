# e-commerceBackEnd

## Description

This is a challenge is to build the back end for an e-commerce site, by using a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

## Installation

To install necessary dependencies, run:
   
~~~
npm i
~~~

To add database name, MySQL username, and MySQL password, open:

~~~
.env file
~~~

To create the schema from the MySQL shell, run:

~~~
source schema.sql
~~~

To seed the database from the command line, run:

~~~
npm run seed
~~~

To start the application on command line, run:

~~~
npm start
~~~

## Usage

After the server has started, the user can open up the API routes in INSOMNIA CORE.

The user can use the GET routes to retreive data for products, tags, or categories.

The user can use the POST routes to create new data for products, tags, or categories.

The user can use the PUT routes to update data for products, tags, or categories.

The user can use the DELETE routes to delete data from products, tags, or categories.

## Visual

[Demo Video](https://drive.google.com/file/d/1_bHbFNE3IsSs9skF8FLwSiruPZ4nsBvk/view)

## License

This project is licensed under MIT license.