import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Edit } from "lucide-react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  coverImage?: string;
  description: string;
}

const BookCard = ({
  id,
  title,
  author,
  coverImage = "/placeholder.svg",
  description,
}: BookCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-[2/3] relative bg-muted">
        <img
          src={coverImage}
          alt={title}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{author}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href={`/books/${id}`}>
            <BookOpen className="h-4 w-4 mr-1" />
            Читать
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href={`/edit-book/${id}`}>
            <Edit className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
