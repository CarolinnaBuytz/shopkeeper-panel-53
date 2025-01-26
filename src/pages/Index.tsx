import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { FeaturedCollections } from "@/components/FeaturedCollections";

const Index = () => {
  return (
    <div className="min-h-screen bg-geek-dark">
      <Navbar />
      <Hero />
      <FeaturedCollections />
    </div>
  );
};

export default Index;