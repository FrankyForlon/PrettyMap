import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-bloom-border/30 bg-bloom-black px-6 py-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-bloom-teal/20 flex items-center justify-center border border-bloom-teal/30">
            <div className="w-2 h-2 rounded-full bg-bloom-teal" />
          </div>
          <span className="text-sm font-semibold text-white">
            prettyparasites<span className="text-bloom-teal">.ai</span>
          </span>
        </Link>
        <p className="text-xs text-gray-600">
          &copy; 2026 prettyparasites.ai &mdash; A community for AI creators
        </p>
      </div>
    </footer>
  );
}
