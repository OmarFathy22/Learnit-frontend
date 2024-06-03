
export interface IComment {
  _id: string;
  content: string;
  postID: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IPost {
  _id: string;
  title: string;
  content: string;
  communityID: string;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  __v: number;

}
export interface IPosts {
  Posts: IPost[];
}

export interface ICourse {
  _id: string,
  courseName: string,
  description: string,
  instructorID: string,
  subCategoryID: string,
  totalRating: number,
  numRatings: number,
  averageRating: number,
  courseSections: [],
  numberOfLessons: number,
  createdAt: string,
  updatedAt: string,
  __v: number
}

export interface ICourses {
  Courses: ICourse[];
}

  