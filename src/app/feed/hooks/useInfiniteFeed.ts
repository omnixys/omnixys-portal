// lib/hooks/useInfiniteFeed.ts
export function useInfiniteFeed() {
  const [page, setPage] = useState(1);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["feed"],
    queryFn: ({ pageParam }) =>
      fetch(`/api/feed?page=${pageParam}`).then((r) => r.json()),
    initialPageParam: 1,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  return { posts: data?.pages.flat(), fetchNextPage };
}

const [optimisticPost, addOptimistic] = useOptimistic(
  post,
  (state, action) => {
    if (action === "like") {
      return { ...state, likes: state.likes + 1 };
    }
    return state;
  }
);

<IconButton
  onClick={() => {
    addOptimistic("like");
    likePostAction(post.id);
  }}
>
  ❤️ {optimisticPost.likes}
</IconButton>
