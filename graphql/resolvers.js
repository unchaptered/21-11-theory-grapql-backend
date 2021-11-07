/*
    Query 는 Database 와 GraphQl 을 위한 개념이고
    우리가 Node.js 에서 이를 사용하기 위해서는
    어떠한 방식으로 Resolve(해결)해야한다.
*/
// import { getMovies, getById, addMovie, deleteMovie } from "./db.js";

import { getMovies } from "./yts.js";

console.log("resolvers.js on");

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    // movies: () => getMovies(),
    // movie: (_, { id }) => getById(id),
  },
  // Mutation: {
  //   addMovie: (_, { name, score }) => addMovie(name, score),
  //   deleteMovie: (_, { id }) => deleteMovie(id),
  // },
};

export default resolvers;
