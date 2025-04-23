import { useState } from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Моковые данные для демонстрации
const allBooks = [
  {
    id: "1",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    description: "Один из самых загадочных и мистических романов XX века.",
    coverImage: "/placeholder.svg",
    genre: "Классика"
  },
  {
    id: "2", 
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    description: "Социально-психологический и социально-философский роман.",
    coverImage: "/placeholder.svg",
    genre: "Классика"
  },
  {
    id: "3",
    title: "Война и мир",
    author: "Лев Толстой",
    description: "Роман-эпопея, описывающий русское общество в эпоху войн против Наполеона.",
    coverImage: "/placeholder.svg",
    genre: "Классика"
  },
  {
    id: "4",
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    description: "Первая книга из серии о юном волшебнике Гарри Поттере.",
    coverImage: "/placeholder.svg",
    genre: "Фэнтези"
  },
  {
    id: "5",
    title: "1984",
    author: "Джордж Оруэлл",
    description: "Роман-антиутопия о тоталитарном обществе будущего.",
    coverImage: "/placeholder.svg",
    genre: "Антиутопия"
  },
  {
    id: "6",
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    description: "Аллегорическая повесть о дружбе, любви и человечности.",
    coverImage: "/placeholder.svg",
    genre: "Сказка"
  }
];

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState<string>("all");
  
  // Получаем уникальные жанры из книг
  const genres = Array.from(new Set(allBooks.map(book => book.genre)));
  
  // Фильтруем книги по поисковому запросу и жанру
  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = genreFilter === "all" || book.genre === genreFilter;
    
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <BookOpen className="h-7 w-7 text-primary" />
                Библиотека книг
              </h1>
              <p className="text-muted-foreground mt-1">Найдено книг: {filteredBooks.length}</p>
            </div>
            
            <Button asChild>
              <Link to="/create-book">Добавить книгу</Link>
            </Button>
          </div>
          
          {/* Фильтры */}
          <div className="bg-card rounded-lg p-4 mb-8 border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по названию или автору"
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={genreFilter} onValueChange={setGenreFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите жанр" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все жанры</SelectItem>
                  {genres.map(genre => (
                    <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Список книг */}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Книги не найдены</p>
              <p className="mt-2">Попробуйте изменить параметры поиска или добавьте новую книгу</p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-card border-t py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2023 БиблиоМир. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Books;
