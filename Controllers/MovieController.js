'use strict'
//import {MessageHelpers} from "../Helpers/ReturnMessageHelper.js"
const MessageHelpers = require ("../Helpers/ReturnMessageHelper.js")
const MovieModel = require("./../Models/MovieModel")

var MovieController = ()=>{};

      MovieController.getAll = (req, res, next)=>
      {
        MovieModel.getAll((docs)=>{
          return res.json(docs)
        })
      }
      MovieController.getOne = (req, res, next)=>
      {
         MovieModel.getOne(req.params.MovieId, (err, rows)=>{
         return err?res.status(404).send(MessageHelpers.MessageHttp(true, "Pelicula no encontrada", ""))
                   :res.json(MessageHelpers.MessageHttp(false, "", rows))
         })
      }
      MovieController.save = (req, res)=>{
        let data={
          movied_id:req.body.movied_id,
          tittle:req.body.tittle,
          release_year:req.body.release_year,
          reating :req.body.reating,
         image:req.body.image
        }
        MovieModel.save(data, (docs)=>{
          return res.json(docs)
        })

}
      MovieController.delete = (req, res, next)=>
      {
        MovieModel.delete(req.params.movieid, (err, rows)=>{
            return err?res.status(500).send(MessageHelpers.MessageHttp(true, "Hubo un problema con el servidor al eliminar el item", ""))
                      :res.json(MessageHelpers.MessageHttp(false, "", "Item eliminado con exito"))
        })
      }

module.exports= MovieController;
