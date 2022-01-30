import express from 'express';
import gqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

// gql schema
const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

// dummy data
const courseData = [
  {
    id: 1,
    title: 'Node developer course',
    author: 'Andrew Ng, Philih Toti',
    description: 'A node developer course for begineers',
    topic: 'Node.js',
    url: 'https://coursera.com/nodejs'
  },
  {
    id: 2,
    title: 'Node for Express',
    author: 'Abel Billum',
    description: 'A node for express developer course for begineers',
    topic: 'Node.js',
    url: 'https://coursera.com/nodejs/express'
  },
  {
    id: 3,
    title: 'Node for MongoDB',
    author: 'Bishop Guil',
    description: 'A node for mongodb developer course for begineers',
    topic: 'Node.js',
    url: 'https://coursera.com/nodejs/mondodb'
  },
  {
    id: 4,
    title: 'React Developer Course',
    author: 'Bambi Newton',
    description: 'A react developer course for begineers',
    topic: 'React.js',
    url: 'https://coursera.com/nodejs/mondodb'
  }
];

// query function for course query
const getCourse = (args) => courseData.filter((course) => course.id === args.id)[0];

// query function for courses query
const getCourses = (args) => {
  if (args.topic) {
    return courseData.filter((course) => course.topic === args.topic);
  } return courseData;
};

// query function for update course topic query
const updateCourseTopic = ({ id, topic }) => {
  courseData.map((course) => {
    if (course.id === id) course.topic = topic;
    return course;
  });
  return courseData.filter((course) => course.id === id)[0];
};

// resolver
// assign function for each query call
const root = {
  course: getCourse,
  courses: getCourses,
  updateCourseTopic,
};

// server
const app = express();
app.use('/graphql', gqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(3000, () => console.log('listening on port 3000 🚀 '));
