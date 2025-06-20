import Image from "next/image";
import Link from "next/link";

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

export default CategoryCard;
