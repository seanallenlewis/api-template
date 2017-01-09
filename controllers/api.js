var
  Song = require('../models/Song.js')



module.exports = {

  index: (req, res) => {
    Song.find({}, (err, songs) => {
    res.json(songs)
    })
  },

  show: (req, res) => {
    Song.findById(re.params.id, (err, song) => {
      res.json(song)
    })
  },

  create: (req, res) => {
    Song.create(req.body, (err, song) =>{
      res.json({Message: "Song Created.", song})
    })
  },

  update: (req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, song) => {
      res.json({message: "hi there, looks like it was updated, partner.", song})
    })
  },

  destroy: (req, res) => {
    Song.findByIdAndRemove(req.params.id, (err, song) => {
      res.json({message: song.title +" Deleted!"})
    })
  }
}
