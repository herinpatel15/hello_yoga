// import { useRouter } from "next/router";
// import data from "@/data/data.json";
// import Image from "next/image";
// import Link from "next/link";

// const CategoryDetailPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   if (!slug || typeof slug !== "string") return null;

//   const category = data.find(
//     (cat) => cat.category_name.toLowerCase().replace(/\s+/g, "-") === slug
//   );

//   if (!category) {
//     return <p className="p-8 text-center text-red-600">Category not found.</p>;
//   }

//   return (
//     <main className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-2">{category.category_name}</h1>
//       <p className="text-gray-700 mb-6">{category.category_description}</p>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {category.poses.map((pose) => (
//           <Link
//             key={pose.id}
//             href={`/pose/${pose.sanskrit_name_adapted.toLowerCase()}`}
//             className="border rounded-xl shadow hover:shadow-lg transition bg-white p-4"
//           >
//             <Image
//               src={pose.url_png}
//               alt={pose.english_name}
//               width={300}
//               height={200}
//               className="rounded w-full h-52 object-contain mb-3 bg-gray-50"
//             />
//             <h2 className="text-lg font-semibold">{pose.english_name}</h2>
//             <p className="text-sm text-gray-500 italic">
//               {pose.sanskrit_name_adapted}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default CategoryDetailPage;


'use client';

import { useParams } from "next/navigation";
import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";

const CategoryDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const category = data.find(
    (cat) => cat.category_name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!category) {
    return <p className="p-8 text-center text-red-600">Category not found.</p>;
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{category.category_name}</h1>
      <p className="text-gray-700 mb-6">{category.category_description}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.poses.map((pose) => (
          <div
            key={pose.id}
            className="border rounded-xl shadow hover:shadow-lg transition bg-white p-4"
          >
            <Image
              src={pose.url_png}
              alt={pose.english_name}
              width={300}
              height={200}
              className="rounded w-full h-52 object-contain mb-3 bg-gray-50"
            />
            <h2 className="text-lg font-semibold">{pose.english_name}</h2>
            <p className="text-sm text-gray-500 italic">
              {pose.sanskrit_name_adapted}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryDetailPage;
