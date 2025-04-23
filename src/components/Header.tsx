import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">БиблиоМир</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/books" className="text-foreground hover:text-primary transition-colors">
            Книги
          </Link>
          <Link to="/create-book">
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Добавить книгу
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
