import { redirect } from "next/navigation";

const default_category_id = '01'; //

const page = async () => {
  redirect(`/category/${default_category_id}`); // ✅ redirect to default category
  
};

export default page;