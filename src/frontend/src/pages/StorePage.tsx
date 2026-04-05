import { motion } from "motion/react";

const products = [
  {
    name: "Mukammal Arbi Qaida",
    price: 100,
    description: "Complete Arabic Qaida for beginners",
    bestSeller: true,
    emoji: "📖",
  },
  {
    name: "Amma Para",
    price: 50,
    description: "Para Amma for basic Quran reading",
    bestSeller: false,
    emoji: "📕",
  },
  {
    name: "Quran Shareef",
    price: 350,
    description: "Standard Arabic Quran",
    bestSeller: true,
    emoji: "📗",
  },
  {
    name: "Kitabaat",
    price: 50,
    description: "Writing practice book",
    bestSeller: false,
    emoji: "✏️",
  },
  {
    name: "Chaman Islam Awwal",
    price: 30,
    description: "Basic Islamic learning book (Part 1)",
    bestSeller: false,
    emoji: "🌿",
  },
  {
    name: "Chaman Islam Duam",
    price: 40,
    description: "Islamic learning book (Part 2)",
    bestSeller: false,
    emoji: "🌱",
  },
  {
    name: "Islami Taleem Awwal",
    price: 40,
    description: "Islamic studies beginner level",
    bestSeller: false,
    emoji: "📘",
  },
  {
    name: "Islami Taleem Duam",
    price: 50,
    description: "Intermediate Islamic studies book",
    bestSeller: false,
    emoji: "📙",
  },
  {
    name: "Hamara Deen",
    price: 100,
    description: "Complete Islamic knowledge book",
    bestSeller: false,
    emoji: "🕌",
  },
  {
    name: "Pouch Pencil Set",
    price: 50,
    description: "Pencil pouch set for students",
    bestSeller: false,
    emoji: "🖊️",
  },
  {
    name: "Maktab Bag",
    price: 150,
    description: "School bag for madrasa students",
    bestSeller: false,
    emoji: "🎒",
  },
  {
    name: "Maktab Topi",
    price: 100,
    description: "White topi for daily use",
    bestSeller: false,
    emoji: "🧢",
  },
  {
    name: "Jannatul Firdaus Attar",
    price: 100,
    description: "Premium fragrance attar",
    bestSeller: false,
    emoji: "🌹",
  },
  {
    name: "Note Book",
    price: 40,
    description: "Writing notebook",
    bestSeller: false,
    emoji: "📓",
  },
  {
    name: "Urdu Qaida",
    price: 20,
    description: "Basic Urdu learning book",
    bestSeller: false,
    emoji: "📚",
  },
];

function whatsappLink(productName: string) {
  const text = encodeURIComponent(
    `Assalamualaikum mujhe ${productName} order karna hai`,
  );
  return `https://wa.me/918849100903?text=${text}`;
}

const bulkWhatsappLink =
  "https://wa.me/918849100903?text=Assalamualaikum%20mujhe%20bulk%20order%20karna%20hai";

export function StorePage() {
  return (
    <div className="min-h-screen bg-[#f6faf7]">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-[#0D4A26] to-[#1F6F3E] islamic-pattern py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Madrasa Store
        </h1>
        <p className="text-white/80 text-sm sm:text-base font-medium">
          Order dene ke liye WhatsApp par rabta karein
        </p>
      </div>

      {/* Bulk order note */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <a
          href={bulkWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="store.primary_button"
          className="flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 text-sm text-amber-800 font-medium hover:bg-amber-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#25D366"
            width="18"
            height="18"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          📦 Bulk order ke liye WhatsApp karein — special discount milega!
        </a>
      </div>

      {/* Products grid */}
      <div className="max-w-4xl mx-auto px-4 py-6 pb-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07 }}
              data-ocid={`store.item.${i + 1}`}
              className="relative bg-white rounded-3xl shadow-card border border-islamic-border flex flex-col overflow-hidden hover:shadow-card-hover transition-all hover:-translate-y-0.5"
            >
              {/* Best Seller badge */}
              {product.bestSeller && (
                <span className="absolute top-0 right-0 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-bl-xl rounded-tr-3xl z-10">
                  Best Seller
                </span>
              )}

              <div className="flex flex-col flex-1 p-4 pt-5 gap-2">
                {/* Product icon */}
                <div className="w-14 h-14 rounded-2xl bg-islamic-mint flex items-center justify-center text-2xl mx-auto mb-1">
                  {product.emoji}
                </div>

                {/* Name */}
                <h2 className="text-sm sm:text-base font-bold text-islamic-dark leading-snug text-center">
                  {product.name}
                </h2>

                {/* Description */}
                <p className="text-xs text-islamic-body leading-relaxed flex-1 text-center">
                  {product.description}
                </p>

                {/* Price */}
                <div className="text-center my-1">
                  <span className="text-lg sm:text-xl font-extrabold text-islamic-gold">
                    ₹{product.price}
                  </span>
                </div>

                {/* Buy Now Button */}
                <a
                  href={whatsappLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`store.secondary_button.${i + 1}`}
                  className="flex items-center justify-center gap-1.5 bg-islamic-green hover:bg-islamic-deep text-white text-xs sm:text-sm font-semibold px-3 py-2.5 rounded-2xl transition-colors w-full"
                  aria-label={`Buy ${product.name}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Buy Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
