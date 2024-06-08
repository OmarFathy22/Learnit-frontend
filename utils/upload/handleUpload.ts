import upload from './upload'
import toast from 'react-hot-toast';
export const handleUpload = async (...props:any) => {
  try{
    if (props.ImageFile) {
      const url = await upload(props.ImageFile);
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