// "use server";

// import { BACKEND_URL } from "../utils/constants";

// const fetchApi = async (query: string) => {
//   const args = `${BACKEND_URL}/${query}`;

//   try {
//     const response = await fetch(args, {
//       next: { tags: [query] },
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       return { isError: true, args };
//     }

//     const data = await response.json();

//     return { isError: false, data, args };
//   } catch (error) {
//     return { isError: true, args };
//   }
// };

// Common
// export const fetchExampleQuery = async () => {
//   const res = await fetchApi("join");

//   return {
//     ...res,
//     data: res?.data?.[0] as JoinType,
//   };
// };

// export const fetchExample2Query = async (request: string) => {
//   const res = await fetchApi(`posts${request}`);

//   return {
//     ...res,
//     data: res?.data as GetPostsType,
//   };
// };
