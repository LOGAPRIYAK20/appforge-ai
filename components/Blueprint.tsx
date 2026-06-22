export default function Blueprint() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">
        🚀 Project Blueprint
      </h2>

      <div className="bg-slate-900/70 border border-purple-500/20 rounded-xl p-6">

        <h3 className="font-semibold mb-2">
          Frontend
        </h3>
        <p>Next.js + Tailwind CSS</p>

        <h3 className="font-semibold mt-4 mb-2">
          Backend
        </h3>
        <p>Node.js + Express</p>

        <h3 className="font-semibold mt-4 mb-2">
          Database
        </h3>
        <p>MongoDB</p>

        <h3 className="font-semibold mt-4 mb-2">
          AI Layer
        </h3>
        <p>OpenAI API / Gemini API</p>

        <h3 className="font-semibold mt-4 mb-2">
          Deployment
        </h3>
        <p>Vercel + Render</p>

      </div>
    </section>
  );
}