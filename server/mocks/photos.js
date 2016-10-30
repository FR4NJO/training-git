/*jshint node:true*/
module.exports = function (app) {
  var express = require('express');
  var photosRouter = express.Router();
  var photosArray = [
    {
      id: "photoOne",
      name: "Photo One",
      squareUrl: "/images/image1-sq.jpg",
      thumbUrl: "/images/image1-thumb.jpg",
      largeUrl: "/images/image1-large.jpg",
      xlUrl: "/images/image1-xl.jpg"
    },
    {
      id: "photoTwo",
      name: "Photo Two",
      squareUrl: "/images/image2-sq.jpg",
      thumbUrl: "/images/image2-thumb.jpg",
      largeUrl: "/images/image2-large.jpg",
      xlUrl: "/images/image2-xl.jpg"
    },
    {
      id: "photoThree",
      name: "Photo Three",
      squareUrl: "/images/image3-sq.jpg",
      thumbUrl: "/images/image3-thumb.jpg",
      largeUrl: "/images/image3-large.jpg",
      xlUrl: "/images/image3-xl.jpg"
    },
    {
      id: "photoFour",
      name: "Photo Four",
      squareUrl: "/images/image4-sq.jpg",
      thumbUrl: "/images/image4-thumb.jpg",
      largeUrl: "/images/image4-large.jpg",
      xlUrl: "/images/image4-xl.jpg"
    },
    {
      id: "photoFive",
      name: "Photo Five",
      squareUrl: "/images/image5-sq.jpg",
      thumbUrl: "/images/image5-thumb.jpg",
      largeUrl: "/images/image5-large.jpg",
      xlUrl: "/images/image5-xl.jpg"
    }
  ];

  photosRouter.get('/', function (req, res) {
    res.send({
      'photos': photosArray
    });
  });

  photosRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  photosRouter.get('/:id', function (req, res) {
    var photos = photosArray;
    var selectedPhoto = null;
    photos.forEach(function (photo) {
      if (req.params.id === photo.id) {
        selectedPhoto = photo;
      }
    });

    res.send({
      'photo': selectedPhoto
    });
  });

  photosRouter.put('/:id', function (req, res) {
    res.send({
      'photo': {
        id: req.params.id
      }
    });
  });

  photosRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  app.use('/api/photos', photosRouter);
};