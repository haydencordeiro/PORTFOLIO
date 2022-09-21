import { pageInfo } from "../typings";

export const fetchpageInfo = async() => {
     const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getpageInfo`)

     const data = await res.json()
     const pageInfo:pageInfo[] = data.pageInfo

     // console.log("fetching", pageInfo)

     return pageInfo;
}