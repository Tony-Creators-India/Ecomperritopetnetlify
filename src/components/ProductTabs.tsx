import { Star } from "lucide-react";

export function ProductTabs() {
  const benefits = [
    {
      title: "High-Quality Protein for Muscle Strength",
      description: "Made with premium chicken to support strong muscles and overall energy levels.",
    },
    {
      title: "Improved Digestion",
      description: "Includes wholesome veggies and fiber-rich ingredients to support a healthy digestive system.",
    },
    {
      title: "Hydration & Gut Health",
      description: "Moist, fresh food that's easy to digest and supports gut health.",
    },
    {
      title: "Shiny Coat & Healthy Skin",
      description: "Contains essential oils and nutrients that promote a soft, shiny coat and healthy skin.",
    },
    {
      title: "No Artificial Additives",
      description: "Zero preservatives, fillers, or artificial flavors – just clean, balanced nutrition.",
    },
    {
      title: "Supports Overall Wellness",
      description: "Enriched with essential vitamins and minerals for immunity, bone strength, and vitality.",
    },
    {
      title: "Convenient & Ready to Serve",
      description: "Perfect for busy pet parents – no prep needed, just serve and go!",
    },
  ];

  const faqs = [
    {
      question: "What makes Chicken Triple Delight a good option for my dog?",
      answer: "Chicken Triple Delight is a fresh dog food made with real chicken, vegetables, and flax seeds. It's rich in protein, supports digestion, and promotes a shiny coat — making it one of the best dog food choices for everyday feeding."
    },
    {
      question: "Is this product considered a complete meal for dogs?",
      answer: "Yes, it's a ready-to-eat dog food designed to meet your pet's daily nutritional needs. It includes high-quality protein and essential nutrients and fiber from vegetables — perfect as a healthy meal for dogs of all adult breeds."
    },
    {
      question: "Is Chicken Triple Delight suitable for all dog breeds?",
      answer: "Absolutely! This natural dog food is crafted to suit the dietary needs of all adult dog breeds, whether you have a Pug or a Labrador."
    },
    {
      question: "Can I feed Chicken Triple Delight to my puppy?",
      answer: "This meal is specifically formulated for adult dogs. For puppies, consult your vet or check for fresh puppy food variants in our range."
    },
    {
      question: "How is Chicken Triple Delight different from regular kibble?",
      answer: "Unlike dry kibble, Chicken Triple Delight is a moist, freshly cooked dog food made with human-grade ingredients. It has no preservatives, making it a healthier dog food option."
    },
    {
      question: "Is it safe to serve directly from the pack?",
      answer: "Yes! It's ready-to-serve dog food — just tear open and pour into the bowl. For extra comfort, you can lightly warm it before serving or add the pouch in lukewarm water for better consistency."
    },
    {
      question: "How should I store the product after opening?",
      answer: "Store the remaining portion in the refrigerator and use within 24 hours to maintain its freshness and nutritional value. Like any fresh pet food, refrigeration is key."
    },
    {
      question: "What are the main ingredients in Chicken Triple Delight?",
      answer: "This ready-to-eat dog meal includes premium chicken, rice, carrots, sunflower oil, and a mix of essential minerals and vitamins — nothing artificial."
    }
  ];

  const reviews = [
    { name: "Priya Sharma", rating: 5, comment: "My Labrador loves this! His coat has become so shiny since we started feeding him Chicken Triple Delight. Highly recommended!" },
    { name: "Rajesh Kumar", rating: 5, comment: "Best fresh dog food in India! My Golden Retriever finishes his bowl in minutes. Great quality and packaging." },
    { name: "Anita Desai", rating: 5, comment: "Finally found a healthy meal option for my German Shepherd. No preservatives and made with real chicken. Worth every rupee!" },
    { name: "Vikram Patel", rating: 5, comment: "Excellent product! My Beagle's digestion has improved significantly. The ready-to-serve feature is very convenient for busy mornings." },
    { name: "Meera Nair", rating: 4, comment: "Very good quality food. My indie dog enjoys it a lot. Would love to see more flavor options in the future!" }
  ];

  return (
    <div className="mt-16 mb-16 space-y-12">
      {/* Reviews Section */}
      <div>
        <div className="bg-[#1f2021] text-white inline-block px-5 py-2 rounded-lg mb-6">
          Reviews (150+)
        </div>
        <div className="space-y-6">
          {/* Overall Rating */}
          <div className="flex items-center gap-4 pb-6 border-b border-[#eae6e6]">
            <div className="text-center">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">5.0</span>
                <span className="text-2xl text-neutral-600">/5.0</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#ffc107] text-[#ffc107]" />
                ))}
              </div>
              <p className="text-sm text-neutral-600 mt-2">Based on 150+ reviews</p>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-[#eae6e6] pb-6 last:border-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= review.rating ? 'fill-[#ffc107] text-[#ffc107]' : 'text-[#e0e0e0]'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-bold">{review.rating}.0</span>
                </div>
                <p className="font-bold mb-2">{review.name}</p>
                <p className="text-neutral-900">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div>
        <div className="bg-[#1f2021] text-white inline-block px-5 py-2 rounded-lg mb-6">
          Key Benefits
        </div>
        <ul className="space-y-4 pl-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="list-disc">
              <div>
                <strong>{benefit.title}</strong>
                <p className="text-neutral-900 mt-1">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Information Section */}
      <div>
        <div className="bg-[#1f2021] text-white inline-block px-5 py-2 rounded-lg mb-6">
          Additional information
        </div>
        <div className="space-y-8">
          {/* Feeding Guide */}
          <div>
            <h3 className="font-bold mb-4">Feeding Guide</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#eae6e6]">
                <thead>
                  <tr className="bg-[#f8f8f8]">
                    <th className="border border-[#eae6e6] px-4 py-3 text-left">Breed Size</th>
                    <th className="border border-[#eae6e6] px-4 py-3 text-left">Grams per Meal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Small (up to 10kg)</td>
                    <td className="border border-[#eae6e6] px-4 py-3">150g</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Medium (up to 24kg)</td>
                    <td className="border border-[#eae6e6] px-4 py-3">225g – 300g</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Large (up to 44kg)</td>
                    <td className="border border-[#eae6e6] px-4 py-3">450g</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Giant (above 44kg)</td>
                    <td className="border border-[#eae6e6] px-4 py-3">600g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Nutritional Information */}
          <div>
            <h3 className="font-bold mb-4">Nutritional Information</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#eae6e6]">
                <thead>
                  <tr className="bg-[#f8f8f8]">
                    <th className="border border-[#eae6e6] px-4 py-3 text-left">Nutrient</th>
                    <th className="border border-[#eae6e6] px-4 py-3 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Energy (100g)</td>
                    <td className="border border-[#eae6e6] px-4 py-3">151 Kcal</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Energy (300g)</td>
                    <td className="border border-[#eae6e6] px-4 py-3">453 Kcal</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Protein</td>
                    <td className="border border-[#eae6e6] px-4 py-3">7 g</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Fat</td>
                    <td className="border border-[#eae6e6] px-4 py-3">7 g</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Carbohydrate</td>
                    <td className="border border-[#eae6e6] px-4 py-3">14 g</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Fiber</td>
                    <td className="border border-[#eae6e6] px-4 py-3">1 g</td>
                  </tr>
                  <tr>
                    <td className="border border-[#eae6e6] px-4 py-3">Moisture</td>
                    <td className="border border-[#eae6e6] px-4 py-3">84% Max</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ's Section */}
      <div>
        <div className="bg-[#1f2021] text-white inline-block px-5 py-2 rounded-lg mb-6">
          FAQ's
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-bold mb-2">{index + 1}. {faq.question}</h3>
              <p className="text-neutral-900">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
