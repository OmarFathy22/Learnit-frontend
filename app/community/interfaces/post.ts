export interface Post {
  _id: string;
  title: string;
  content: string;
  // include other properties as needed
}

export interface Posts {
  Posts: Post[];
}