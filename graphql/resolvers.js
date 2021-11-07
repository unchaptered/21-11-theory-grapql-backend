/*
    Query 는 Database 와 GraphQl 을 위한 개념이고
    우리가 Node.js 에서 이를 사용하기 위해서는
    어떠한 방식으로 Resolve(해결)해야한다.
*/
const resolvers = {
  Query: {
    name: () => "unchaptered"
  }
};

export default resolvers;