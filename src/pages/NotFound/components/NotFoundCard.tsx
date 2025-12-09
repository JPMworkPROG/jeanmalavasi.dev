import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, AlertCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { NotFoundData } from "../data";

interface NotFoundCardProps {
  data: NotFoundData;
}

export function NotFoundCard({ data }: NotFoundCardProps) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-2xl space-y-8 border-border/60 bg-card p-8 text-center lg:p-12">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-6">
            <AlertCircle className="h-16 w-16 text-primary" aria-hidden="true" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">{data.title}</h1>
          <h2 className="text-3xl font-semibold">{data.heading}</h2>
          <p className="mx-auto max-w-md text-muted-foreground text-lg">
            {data.description}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              {data.backToHome}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/projects" search={{ page: 1 }}>
              {data.viewProjects}
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}

