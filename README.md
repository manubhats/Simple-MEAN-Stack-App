# Movie Finder

[Heroku link to my application](http://cse5335-mxs1773-2.herokuapp.com/)

A simple web application using MEAN Stack to display details about English movies.

Technology Stack:
  - NodeJS
  - AngularJS
  - ExpressJS
  - MongoDB

The application is deployed on heroku and MongoDB is hosted on mlab.

##### What aspect of the implementation did you find easy, if any, and why?
Writing and running a server using Node.js was easy because there were lots of good resources available online to study and learn Node.js. Also,I'm familiar with MongoDB so integrating the NoSQL database to my application was an easy job.

##### What aspect of the implementation did you find hard, if any, and why? 
The hardest part of the implementation was sending a different query to the NoSQL database every 500ms and updating the DOM accordingly. Also, the animation part was new to me and I had to read about it a lot before implementing it.

##### If you were to use these technologies professionally, what would be your biggest concern?  
My biggest concern would be the learning curve for new technologies like AngularJS and its ever evolving classes. The libraries that we use today may be deprecated tomorrow. So, staying upto date with these technologies and using them approriately is difficult. 

## Running the App
Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone https://github.com/manubhats/cse5335-mxs1773-2.git # or clone your own fork
$ cd cse5335-mxs1773-2
$ npm install
$ npm start
```
To use MongoLab, go to Heroku Dashboard->Resources->Add-ons and Add mlab to your application.

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
   [//]:#References
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Heroku getting Started]: <https://github.com/heroku/node-js-getting-started>
   [Mongoose]: <http://mongoosejs.com/docs/queries.html>
   [Mongoose]: <http://docs.mlab.com/languages/>
   