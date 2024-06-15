import upload from './upload'
import toast from 'react-hot-toast';
export const handleUpload = async (image:File) => {
  try{
    if (image) {
      const url = await upload(image);
      if(url){
        toast.success("Image uploaded successfully");
        return url;
      }
      else{
        toast.error("Something went wrong");
        return null;
      }
    }
  }catch(error){
    console.error(error);
    toast.error("Something went wrong");
    return null;
  }
};