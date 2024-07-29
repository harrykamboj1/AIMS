import { gql, request } from 'graphql-request';


const MAIN_URL = process.env.NEXT_PUBLIC_HYGRAPH_MAIN_URL + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master"

const getCourseList = async () => {
  const query = gql`
    query CourseList {
  courseLists {
    author
    name
    id
    free
    description
    demoUrl
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    sourceCode
    totalChapters
    tag
  }
}
`

  const result = await request(MAIN_URL, query);
  return result;
}

export default {
  getCourseList
}