import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { PAGINATION_CONFIG } from "@/lib/pagination";
import { Trans, useTranslation } from "react-i18next";

interface ProjectsPaginationProps {
   currentPage: number;
   totalPages: number;
   itemsPerPage: number;
   totalItems: number;
}

export function ProjectsPagination({
   currentPage,
   totalPages,
   itemsPerPage,
   totalItems,
}: ProjectsPaginationProps) {
   const navigate = useNavigate({ from: "/projects" });
   const { t } = useTranslation();

   const handlePageChange = (newPage: number) => {
      if (newPage < PAGINATION_CONFIG.MIN_PAGE || newPage > totalPages) return;

      navigate({
         to: "/projects",
         search: (prev) => ({ ...prev, page: newPage }),
         replace: true,
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const startItem = (currentPage - 1) * itemsPerPage + 1;
   const endItem = Math.min(currentPage * itemsPerPage, totalItems);

   if (totalPages <= 1) return null;

   return (
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
         <p className="text-sm text-muted-foreground">
            <Trans
               i18nKey="projects.pagination.range"
               values={{ start: startItem, end: endItem, total: totalItems }}
               components={{ strong: <span className="font-medium" /> }}
            />
         </p>

         <div className="flex items-center gap-2">
            <Button
               variant="outline"
               size="sm"
               onClick={() => handlePageChange(currentPage - 1)}
               disabled={currentPage === PAGINATION_CONFIG.MIN_PAGE}
               className="transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
               <ChevronLeft className="h-4 w-4" />
               <span className="sr-only sm:not-sr-only sm:ml-1">{t('projects.pagination.previous')}</span>
            </Button>

            <div className="flex items-center gap-1">
               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                     page === 1 ||
                     page === totalPages ||
                     (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                     return (
                        <Button
                           key={page}
                           variant={currentPage === page ? "default" : "outline"}
                           size="sm"
                           onClick={() => handlePageChange(page)}
                           className="min-w-10 transition-transform duration-200 hover:scale-105 active:scale-95"
                        >
                           {page}
                        </Button>
                     );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                     return (
                        <span key={page} className="px-2 text-muted-foreground">
                           ...
                        </span>
                     );
                  }
                  return null;
               })}
            </div>

            <Button
               variant="outline"
               size="sm"
               onClick={() => handlePageChange(currentPage + 1)}
               disabled={currentPage === totalPages}
               className="transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
               <span className="sr-only sm:not-sr-only sm:mr-1">{t('projects.pagination.next')}</span>
               <ChevronRight className="h-4 w-4" />
            </Button>
         </div>
      </div>
   );
}
