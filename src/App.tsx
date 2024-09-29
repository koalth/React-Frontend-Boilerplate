import ClassCard from "./components/ClassCard";
import BlockLayout from "./layouts/BlockLayout";
import MainLayout from "./layouts/MainLayout";

type SpecInfo = {
  name: string;
  image: string;
};

type ClassInfo = {
  name: string;
  color: string;
  specs: SpecInfo[];
};

export default function App() {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-2xl font-bold text-black sm:text-4xl">
            Cover Page
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            A cool little description
          </p>
        </div>
        <BlockLayout>
          <ClassCard name={""} color={""} />
          <ClassCard name={""} color={""} />
          <ClassCard name={""} color={""} />
          <ClassCard name={""} color={""} />
          <ClassCard name={""} color={""} />
        </BlockLayout>
      </div>
    </MainLayout>
  );
}
