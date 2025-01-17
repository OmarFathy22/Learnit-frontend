
export const getCourse = async (courseID: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/${courseID}`);
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export const EnrollInCourse = async (userID: string, courseID: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/in-progress-courses/addNewCourseToInProgress`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID,
          courseID
        }),
      }
    );
    console.log("Enrolled successfully");
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const passQuiz = async (addedPoints:Number , userID:string , quizID:string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user-progress/updateUserPoints`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID,
          quizID,
          addedPoints
        }),
      }
    );
    console.log("Quiz passed successfully");
    return res;
  } catch (e) {
    console.log(e);
  }
};


