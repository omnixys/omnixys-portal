 "use client";

 import { useOptimistic, useState } from "react";
import { Post } from "../lib/mock/posts";

 type Action = { type: "like" } | { type: "repost" } | { type: "bookmark" };

 export function useOptimisticPost(post: Post) {
   const [revealedSensitive, setRevealedSensitive] = useState(false);

   const [optimisticPost, updateOptimistic] = useOptimistic(
     post,
     (state: Post, action: Action): Post => {
       switch (action.type) {
         case "like":
           return {
             ...state,
             liked: !state.liked,
             likes: state.liked ? state.likes - 1 : state.likes + 1,
           };

         case "repost":
           return {
             ...state,
             reposted: !state.reposted,
             reposts: state.reposted ? state.reposts - 1 : state.reposts + 1,
           };

         case "bookmark":
           return {
             ...state,
             bookmarked: !state.bookmarked,
           };

         default:
           return state;
       }
     },
   );

   return {
     post: optimisticPost,
     act: updateOptimistic,
     revealedSensitive,
     revealSensitive: () => setRevealedSensitive((v) => !v),
   };
 }
