import data from "@/data/data.json"; // adjust path as needed
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-10 text-center">Yoga Categories</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
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
      <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-xl transition">
        <div className="flex items-center gap-4 mb-4">
          {previewPose ? (
            <Image
              src={previewPose.url_png}
              alt={previewPose.english_name}
              width={60}
              height={60}
              className="rounded"
            />
          ) : (
            <Image
              src={previewPosejugad.url_png}
              alt={previewPosejugad.english_name}
              width={60}
              height={60}
              className="rounded"
            />
          )
        }
          <div>
            <h2 className="text-xl font-bold text-gray-800">{category.category_name}</h2>
            <p className="text-sm text-gray-600">{category.category_description.slice(0, 100)}...</p>
          </div>
        </div>
        <Link
          href={`/category/${category.category_name.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-block mt-2 text-sm font-medium text-secondary hover:underline"
        >
          View Poses →
        </Link>
      </div>
    );
  };