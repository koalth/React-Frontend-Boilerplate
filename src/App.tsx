import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="max-w flex flex-col mx-auto size-full">
      <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <Navbar />
      </header>
      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-2xl font-bold text-black sm:text-4xl">
            Cover Page
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            A cool little description
          </p>
        </div>
      </main>
    </div>
  );
}
