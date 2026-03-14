
export interface tagstype {
  id: string;
  title: string;
}

export interface useridtype {
  id: string;
  username: string;
}

export type contenttype = {
   status: string;
   id: string;
   link: string;
   type: string;
   title: string;
   tags: tagstype[];
   userid: useridtype;
 };

 export interface LinknestCardProps {
   title: string;
   url: string;
   status: string;
   author: string;
   type: string;
   tags: tagstype[];
 }