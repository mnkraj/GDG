import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostPage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3080/api/post/getposts?slug=${slug}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      const fetchUser = async () => {
        try {
          const res = await fetch(
            `http://localhost:3080/api/v1/displaymembers`
          );
          const data = await res.json();
          const userData = data.find(
            (member) => member.registration === post.userId
          );
          setUser(userData);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchUser();
    }
  }, [post]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(
          `http://localhost:3080/api/post/getposts?limit=3`
        );
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <Spinner size="xl" />
      </div>
    );

  const socialMediaIcons = {
    twitter: "fab fa-twitter text-blue-400",
    linkedin: "fab fa-linkedin text-blue-700",
    facebook: "fab fa-facebook text-blue-500",
    instagram: "fab fa-instagram text-pink-600",
    github: "fab fa-github text-gray-900",
  };

  return (
    <main className="p-3 flex flex-col bg-black text-white">
      <h1 className="text-4xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto font-bold">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-5"
      >
        <Button color="blue" pill size="xs">
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content text-xl"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      {user && (
        <div className="p-3 max-w-2xl mx-auto w-full border-t border-slate-500 mt-10">
          <h2 className="text-2xl font-bold">Author Details</h2>
          <div className="flex items-center mt-4">
            <img
              src={user.imageurl}
              alt={user.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-400">{user.branch}</p>
              <p className="text-sm text-gray-400">Year: {user.year}</p>
              <p className="text-sm text-gray-400">Team: {user.team}</p>
              <div className="mt-2 flex">
                {user.github && (
                  <a
                    href={user.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mr-2"
                  >
                    <i className="fab fa-github text-gray-900"></i>
                  </a>
                )}
                {user.linkedin && (
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mr-2"
                  >
                    <i className="fab fa-linkedin text-blue-700"></i>
                  </a>
                )}
                {user.facebook && (
                  <a
                    href={user.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mr-2"
                  >
                    <i className="fab fa-facebook text-blue-500"></i>
                  </a>
                )}
                {user.instagram && (
                  <a
                    href={user.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mr-2"
                  >
                    <i className="fab fa-instagram text-pink-600"></i>
                  </a>
                )}
                {user.x && (
                  <a
                    href={user.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mr-2"
                  >
                    <i className="fab fa-twitter text-blue-400"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
