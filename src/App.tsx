import ClassCard from "./components/ClassCard";
import { MyChart } from "./components/MyChart";
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
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8 mb-5">
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
        <div className="container mx-auto flex justify-center">
          <MyChart />
        </div>
      </div>
    </MainLayout>
  );
}
