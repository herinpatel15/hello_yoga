// import Image from 'next/image'
// import data from "@/data/data.json";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <main className="h-screen w-6xl mx-auto">
//         <div className='flex items-center justify-between'>
//           <div className='w-2xl ml-2'>
//             <h1 className='text-6xl font-black '>Welcome to<br /> <span className='text-secondary'>नमस्कार </span>Yoga</h1>
//             <p className='text-lg mt-2'>Discover the power of yoga with Namaskar Yoga. Learn traditional asanas, breathing techniques, and mindfulness practices to strengthen your body and calm your mind.</p>
//             <button className="btn btn-neutral mt-5">Let's Start</button>
//           </div>
//           <Image src="/hero.png" alt='hero' width={500} height={500}></Image>
//         </div>

//         <section className="py-16 px-6 bg-white">
//           <h2 className="text-3xl font-semibold text-center mb-12">Benefits of Yoga</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {["Strength & Flexibility", "Inner Peace", "Mind-Body Harmony"].map((item, i) => (
//               <div
//                 key={i}
//                 className="p-6 rounded-xl bg-[#f1f8f6] text-center shadow-md hover:shadow-xl transition-all"
//               >
//                 <h3 className="text-xl font-medium mb-2">{item}</h3>
//                 <p className="text-sm text-gray-600">
//                   {i === 0
//                     ? "Build core strength and improve your posture through consistent asana practice."
//                     : i === 1
//                       ? "Reduce stress and anxiety with mindful breathing and meditation."
//                       : "Balance physical wellness and mental clarity every day."}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="p-8">
//           <h1 className="text-3xl font-bold mb-10 text-center">Yoga Categories</h1>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {data.map((cat) => (
//               <CategoryCard key={cat.id} category={cat} />
//             ))}
//           </div>
//         </section>

//         <footer className="bg-secondary text-white text-sm py-4 px-4 mt-8 rounded-2xl mb-3">
//           <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
//             {/* Left: Info & Yoga Day */}
//             <div className="text-center sm:text-left">
//               <p>© {new Date().getFullYear()} Namaskar Yoga. All rights reserved.</p>
//               <p className="text-xs mt-1">World Yoga Day: Celebrated globally on 21st June 🧘‍♂️</p>
//             </div>

//             {/* Right: Creator Credit */}
//             <div className="text-xs text-gray-200 sm:text-right">
//               Crafted by <a href="https://portfolio-v2-0-liard.vercel.app/" className="underline">Herin Patel</a>
//             </div>
//           </div>
//         </footer>
//         {/* <Hero /> */}
//         {/* <Benefit />
//         <CategoriesPage/> */}
//       </main>
//     </>
//   );
// }

// type Pose = {
//   id: number;
//   english_name: string;
//   url_png: string;
// };

// type Category = {
//   id: number;
//   category_name: string;
//   category_description: string;
//   poses: Pose[];
// };

// interface Props {
//   category: Category;
// }

// const CategoryCard = ({ category }: Props) => {
//   const previewPose = category.poses?.[2];
//   const previewPosejugad = category.poses?.[0];

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-xl transition">
//       <div className="flex items-center gap-4 mb-4">
//         {previewPose ? (
//           <Image
//             src={previewPose.url_png}
//             alt={previewPose.english_name}
//             width={60}
//             height={60}
//             className="rounded"
//           />
//         ) : (
//           <Image
//             src={previewPosejugad.url_png}
//             alt={previewPosejugad.english_name}
//             width={60}
//             height={60}
//             className="rounded"
//           />
//         )
//         }
//         <div>
//           <h2 className="text-xl font-bold text-gray-800">{category.category_name}</h2>
//           <p className="text-sm text-gray-600">{category.category_description.slice(0, 100)}...</p>
//         </div>
//       </div>
//       <Link
//         href={`/category/${category.category_name.toLowerCase().replace(/\s+/g, "-")}`}
//         className="inline-block mt-2 text-sm font-medium text-secondary hover:underline"
//       >
//         View Poses →
//       </Link>
//     </div>
//   );
// };

import Image from 'next/image'
import data from "@/data/data.json";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-8 lg:py-16'>
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight'>
              Welcome to<br /> 
              <span className='text-secondary'>नमस्कार </span>Yoga
            </h1>
            <p className='text-base sm:text-lg mt-4 text-gray-700 max-w-lg mx-auto lg:mx-0'>
              Discover the power of yoga with Namaskar Yoga. Learn traditional asanas, breathing techniques, and mindfulness practices to strengthen your body and calm your mind.
            </p>
            <button className="btn btn-neutral mt-6 w-full sm:w-auto">Let Start</button>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <Image 
              src="/hero.png" 
              alt='hero' 
              width={500} 
              height={500}
              className="max-w-full h-auto w-full lg:max-w-lg"
              priority
            />
          </div>
        </div>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white rounded-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12">Benefits of Yoga</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {["Strength & Flexibility", "Inner Peace", "Mind-Body Harmony"].map((item, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 rounded-xl bg-[#f1f8f6] text-center shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-lg sm:text-xl font-medium mb-2">{item}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {i === 0
                    ? "Build core strength and improve your posture through consistent asana practice."
                    : i === 1
                      ? "Reduce stress and anxiety with mindful breathing and meditation."
                      : "Balance physical wellness and mental clarity every day."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">Yoga Categories</h1>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-white text-sm py-6 px-4 sm:px-6 mt-8 rounded-2xl mb-3">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2">
            {/* Left: Info & Yoga Day */}
            <div className="text-center sm:text-left">
              <p>© {new Date().getFullYear()} Namaskar Yoga. All rights reserved.</p>
              <p className="text-xs mt-1">World Yoga Day: Celebrated globally on 21st June 🧘‍♂️</p>
            </div>

            {/* Right: Creator Credit */}
            <div className="text-xs text-gray-200 text-center sm:text-right">
              Crafted by <a href="https://portfolio-v2-0-liard.vercel.app/" className="underline hover:text-white transition-colors">Herin Patel</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

type Pose = {
  id: number;
  english_name: string;
  url_png: string;
};

type Category = {
  id: number;
  category_name: string;
  category_description: string;
  poses: Pose[];
};

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  const previewPose = category.poses?.[2];
  const previewPosejugad = category.poses?.[0];

  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 border hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          {previewPose ? (
            <Image
              src={previewPose.url_png}
              alt={previewPose.english_name}
              width={60}
              height={60}
              className="rounded w-12 h-12 sm:w-15 sm:h-15 object-cover"
            />
          ) : (
            <Image
              src={previewPosejugad.url_png}
              alt={previewPosejugad.english_name}
              width={60}
              height={60}
              className="rounded w-12 h-12 sm:w-15 sm:h-15 object-cover"
            />
          )}
        </div>
        <div className="text-center sm:text-left flex-1 min-w-0">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{category.category_name}</h2>
          <p className="text-sm text-gray-600 line-clamp-3">
            {category.category_description.length > 100 
              ? `${category.category_description.slice(0, 100)}...` 
              : category.category_description
            }
          </p>
        </div>
      </div>
      <Link
        href={`/category/${category.category_name.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-block w-full sm:w-auto text-center sm:text-left mt-2 text-sm font-medium text-secondary hover:underline transition-colors"
      >
        View Poses →
      </Link>
    </div>
  );
};