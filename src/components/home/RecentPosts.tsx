import Image from "next/image";
import Link from "next/link";


export const posts = [
    {
        id: 1,
        title: "Is PHP really dead or is it a myth",
        excerpt:
            "PHP is often labeled as “dead,” but the reality tells a different story. Despite the rise of newer technologies, PHP still powers a large portion",
            date: "Sep 12, 2025",
            slug: "is-PHP-really-dead-or-is-it-a-myth",
            image: "/p1.png",
    },
    {
        id:2,
        title: "Dark Mode Done Right in Tailwind",
        excerpt:
           "A practical guide to implementing dark mode using CSS variables and Tailwind-no hacks",
           date: "Sep 5, 2025",
           slug: "dark-mode-tailwind",
           image: '/p2.png',
    },
    {
        id: 3,
        title: "Why Clean UI Matters for Blogs",
        excerpt: 
            "How typography, spacing, and contrast affect readability and trust in long-format",
            date: "Aug 29, 2025",
            slug: "clean-ui",
            image: "/p3.png",
    },
];

export default function RecentPosts() {
  return (
    <div className='space-y-2 mb-10'>
       <h2 className='text-white text-xl sm:text-2xl md:text-3xl font-semibold'>
          Recent Posts
       </h2>

    { /* recent post cards */ }
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => {
            return(
                <div key={post.id} className="group rounded-xl overflow-hidden bg-[#0B0B0B] border border-white/10 transition-all duration-300 hover:translate-y-1 hover:border-white/20">
                  {/* image */}
                  <div className="relative h-48 w-full overflow-hidden">
                     <Image 
                     src={post.image}
                     alt={post.title}
                     className="object-cover transition-transform duration-500 group-hover:scale-105" 
                     fill
                     />
                     <div className="absolute inset-0 bg-black/30"/>
                  </div>

                  {/* content */}
                  <div>
                      <time className="text-xs text-gray-400">{post.date}</time>

                      <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                        {post.excerpt}</p>
                        <Link href={`/articles/${post.slug}`} className="inline-block text-sm font-medium text-indigo-400 hover:underline">
                         Read article 
                        </Link>
                     </div>
                 </div>
            )
          })}
       </div>
    </div>
  )
}
