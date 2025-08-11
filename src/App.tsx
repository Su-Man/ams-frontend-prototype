import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/layout/AppSidebar";
import SemanticSearchView from "./pages/SemanticSearchView";
import UserGuide from "./pages/UserGuide";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import NotFound from "./pages/NotFound";
import ScheduleUploadFolder from "@/pages/schedule-upload-folder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-14 flex items-center border-b border-border bg-card/50 backdrop-blur-sm px-6">
                <SidebarTrigger className="mr-4" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <h1 className="text-lg font-semibold text-foreground">callAI</h1>
                </div>
              </header>
              <main className="flex-1 p-6 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/upload" element={<Upload />} />
                  <Route path="/calls" element={<Dashboard />} />
                  <Route path="/search" element={<SemanticSearchView />} />
                  <Route path="/analytics" element={<Dashboard />} />
                  <Route path="/settings" element={<Dashboard />} /> 
                  <Route path="/guide" element={<UserGuide />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/schedule-upload-folder" element={<ScheduleUploadFolder />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
