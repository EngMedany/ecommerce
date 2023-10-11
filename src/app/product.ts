export interface Product {
    description:string;
    _id:string;
    title:string;
    price:number;
    ratingsAverage:number;
    imageCover:string;
    category:category
}
 
interface category{
    name : string;
    image:string;
    slug:string;
    _id:string
}