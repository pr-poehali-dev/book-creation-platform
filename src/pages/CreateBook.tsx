import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookCopy, Check, Upload } from "lucide-react";

const CreateBook = () => {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  
  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика для сохранения книги
    alert("Книга успешно создана!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookCopy className="h-6 w-6 text-primary" />
              Создание новой книги
            </h1>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle className="text-lg">Обложка книги</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[2/3] bg-muted rounded-md overflow-hidden flex items-center justify-center mb-4">
                      {coverPreview ? (
                        <img 
                          src={coverPreview} 
                          alt="Предпросмотр обложки" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-4">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Загрузите изображение</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="cover">Загрузить обложку</Label>
                      <Input
                        id="cover"
                        type="file"
                        accept="image/*"
                        onChange={handleCoverChange}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Информация о книге</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="title">Название книги</Label>
                      <Input id="title" placeholder="Введите название книги" required />
                    </div>
                    
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="author">Автор</Label>
                      <Input id="author" placeholder="Введите имя автора" required />
                    </div>
                    
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="genre">Жанр</Label>
                      <Input id="genre" placeholder="Например: Роман, Фантастика, Детектив" />
                    </div>
                    
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="year">Год издания</Label>
                      <Input id="year" placeholder="Например: 2023" type="number" />
                    </div>
                    
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="description">Описание</Label>
                      <Textarea id="description" placeholder="Введите краткое описание книги" rows={4} required />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline">Отмена</Button>
                <Button type="submit">
                  <Check className="mr-1 h-4 w-4" />
                  Создать книгу
                </Button>
              </div>
            </form>
          </div>
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

export default CreateBook;
