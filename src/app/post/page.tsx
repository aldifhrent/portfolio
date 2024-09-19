export default function PostPage() {
  return (
    <section className="">
      <div className="container">
        <h1 className="text-md font-semibold">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  mt-8 items-center">
          <PostCard
            title={"Create Reusable Components"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi iure at rem cupiditate delectus, facilis quae magnam numquam dolores. Maiores error quaerat dicta excepturi, reprehenderit corporis quibusdam? Fuga, mollitia! "
            }
          />
        </div>
      </div>
    </section>
  );
}

interface PostCardProps {
  imageUrl?: string;
  title: string;
  description: string;
}
function PostCard({ imageUrl, title, description }: PostCardProps) {
  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <div className="w-fit border dark:border-white rounded-lg h-fit">
        <div className="flex items-center justify-center">
          <img
            src="https://fahrezi.fyi/_next/image?url=%2Fimg%2Fhow-to-get-10k-free-credits-from-aws.webp&w=750&q=75"
            alt=""
            width={260}
            height={100}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h1 className="text-sm text-nowrap font-bold">{title}</h1>
          <p className="text-xs">{description}</p>
          <div className="mx-auto flex flex-col  justify-end mt-4">
            <button className="w-full text-sm px-2 py-1 bg-black rounded-sm text-white">
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
