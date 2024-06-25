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
export interface ISection {
  _id?: string;
  sectionName:string,
  courseID: string
}
export const CreateNewCourse = async (body: ICourse) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/course/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const CreateNewSection = async (body: ISection) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/course-section/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const CreateNewLesson = async (body: ICourse) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/course-section/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};