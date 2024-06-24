
export interface IComment {
  _id: string;
  content: string;
  postID: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IPost {
  _id?: string;
  title: string;
  content: string;
  communityID: string;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  __v: number;

}

export interface Option {
	title: string;
	count: number;
	_id: string;
}

export interface IPoll {
  totalVotes: any[];
	_id: string;
	title: string;
	options: Option[];
	communityID: string;
	comments: any[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface IPosts {
  Posts: IPost[];
}
export interface IPolls {
  polls: IPoll[];
}

export interface ICourse {
  _id?: string;
  courseName: string;
  language: string;
  numberOfLessons?: number;
  totalVideoTime?: number;
  courseLevel: string;
  pointsToUnlock: number;
  description: string;
  imageFile?: File;
  bannerImage: string;
  instructorID?: string;
  subCategoryName: string;
}

export interface ICourses {
  Courses: ICourse[];
}

  