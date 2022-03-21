'use strict'

const conn = require("./../ConexionDB/Conexion");
const MovieModel = ()=>{};

      MovieModel.getAll = (cb) => {
       conn
       .find()
       .exec((err, docs)=>{
             if(err) throw err
             cb(docs)
       })   
      }
      MovieModel.getOne = (MovieId, cb) => {}
      MovieModel.save = (data, cb)=>{
            conn
            .count({movie_id:data.movie_id})
            .exec((err, count)=>{
                  if(err) throw err
                  console.log(`Numero de docs: ${count}`)
                  if(count == 0){
                        conn
                        .create(data, (err)=>{
                              if(err) throw err
                              cb()
                        })
                  }else if(count == 1){
                        conn
                        .findOneAndUpdate(
                              {movie_id:data.movie_id}, 
                              {
                                    title:data.title,
                                    release_yerar:data.release_yerar,
                                    rating : data.rating,
                                    image:data.image
                              }, 
                              (err)=>{
                              if(err) throw err
                              cb()})
                  }
            })
      }
      MovieModel.delete = (movieid, cb) =>{} 
      
module.exports = MovieModel