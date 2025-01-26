import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    title: "Colecionáveis",
    image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?q=80&w=400",
    description: "Action figures e itens raros",
  },
  {
    id: 2,
    title: "Vestuário",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=400",
    description: "Camisetas e acessórios exclusivos",
  },
  {
    id: 3,
    title: "Games",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400",
    description: "Jogos e acessórios para gamers",
  },
];

export const FeaturedCollections = () => {
  return (
    <section className="bg-geek-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Portais Dimensionais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collection/${collection.id}`}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-geek-dark to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                <p className="text-white/80">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};