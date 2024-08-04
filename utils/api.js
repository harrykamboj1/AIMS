import { gql, request } from 'graphql-request';


const MAIN_URL = process.env.NEXT_PUBLIC_HYGRAPH_MAIN_URL + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master"

const getCourseList = async () => {
  const query = gql`
    query CourseList {
  courseLists(first: 20, orderBy: createdAt_DESC) {
    author
    name
    id
    free
    price
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
    slug
    sourceCode
    totalChapters
    tag
  }
}
`

  const result = await request(MAIN_URL, query);
  return result;
}


const getSideBannerData = async () => {
  const query = gql`query SideBanner{
  sideBanners{
    id
    name
    banner{
      id
      url
    }
    url
  }
}`
  const result = await request(MAIN_URL, query);
  return result;
}


const getCourseById = async (courseId) => {
  const query = gql`
  query MyQuery {
  courseList(where: {slug: "`+ courseId + `"}) {
    author
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
    demoUrl
    description
    totalChapters
    youtubeUrl
    free
    price
    id
    name
    slug
    sourceCode
    tag
  }
}`
  const result = await request(MAIN_URL, query);
  return result;
}

const enrollToCourse = async (courseId, userEmail) => {

  const query = gql`mutation MyMutation {
  createUserEnrollCourse(
    data: {courseId: "${courseId}", courseList: {connect: {slug: "${courseId}"}}, userEmail: "${userEmail}"}
  ) {
    id
  }
  publishManyUserEnrollCoursesConnection {
    edges {
      node {
        id
      }
    }
  }
}
`

  const result = await request(MAIN_URL, query);
  return result;
}

const checkUserEnrolledToCourse = async (courseId, email) => {
  const query = gql`query MyQuery {
  userEnrollCourses(where: {courseId: "${courseId}", userEmail: "${email}"}) {
    id
  }
}
`
  const result = await request(MAIN_URL, query);
  return result;

}

const getUserEnrolledCourseDetails = async (courseId, email) => {
  const query = gql`query MyQuery {
  userEnrollCourses(where: {id: "${courseId}", userEmail: "${email}"}) {
    courseId
    id
    userEmail
    courseList {
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          shortDesc
          video {
            url
          }
        }
      }
      demoUrl
      description
      free
      id
      name
      sourceCode
      slug
      tag
      totalChapters
    }
  }
}
`

  const result = await request(MAIN_URL, query);
  return result;

}

export default {
  getCourseList,
  getSideBannerData,
  getCourseById,
  enrollToCourse,
  checkUserEnrolledToCourse,
  getUserEnrolledCourseDetails
}