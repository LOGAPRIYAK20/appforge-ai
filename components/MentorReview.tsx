export default function MentorReview() {
  const reviews = [
    {
      title: "Technical Judge",
      score: "8/10",
      strength: "Strong AI integration",
      weakness: "Needs scalability plan",
    },
    {
      title: "Business Judge",
      score: "7/10",
      strength: "Clear target users",
      weakness: "Revenue model unclear",
    },
    {
      title: "Innovation Judge",
      score: "9/10",
      strength: "Unique idea evolution system",
      weakness: "Needs more validation",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        AI Judge Review
      </h2>

      <div className="grid gap-4">
        {reviews.map((review) => (
          <div
            key={review.title}
            className="bg-slate-900/70 border border-purple-500/20 rounded-xl p-4 backdrop-blur-lg"
          >
            <h3 className="font-bold">
              {review.title}
            </h3>

            <p className="mt-2">
              Score: {review.score}
            </p>

            <p className="text-green-400">
              Strength: {review.strength}
            </p>

            <p className="text-red-400">
              Weakness: {review.weakness}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}