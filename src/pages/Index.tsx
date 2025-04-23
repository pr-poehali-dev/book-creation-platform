import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { BookOpen, Plus } from "lucide-react";
import { Link } from "react-router-dom";

// Моковые данные для демонстрации
const featuredBooks = [
  {
    id: "1",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    description: "Один из самых загадочных и мистических романов XX века.",
    coverImage: "/placeholder.svg"
  },
  {
    id: "2", 
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    description: "Социально-психологический и социально-философский роман.",
    coverImage: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Война и мир",
    author: "Лев Толстой",
    description: "Роман-эпопея, описывающий русское общество в эпоху войн против Наполеона.",
    coverImage: "/placeholder.svg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Герой-секция */}
        <section className="bg-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Добро пожаловать в БиблиоМир</h1>
              <p className="text-xl mb-8 text-muted-foreground">Платформа для создания и управления книжными коллекциями</p>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/create-book">
                    <Plus className="mr-1" />
                    Добавить книгу
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link to="/books">
                    <BookOpen className="mr-1" />
                    Посмотреть все книги
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Избранные книги */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Избранные книги</h2>
              <Button variant="ghost" asChild>
                <Link to="/books">Смотреть все</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </section>
        
        {/* О платформе */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">О платформе БиблиоМир</h2>
              <p className="text-lg mb-6">
                БиблиоМир — это платформа для модераторов, позволяющая легко создавать, 
                редактировать и управлять книжными коллекциями. Создавайте книги,
                добавляйте обложки и организуйте их по категориям.
              </p>
              <Button asChild>
                <Link to="/create-book">Начать работу</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-card border-t py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2023 БиблиоМир. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
