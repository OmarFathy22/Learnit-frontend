
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
  