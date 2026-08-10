import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider } from "@/contexts/LangContext";
import { ModeProvider } from "@/contexts/ModeContext";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Carta from "./pages/Carta.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import QRLanguage from "./pages/QRLanguage.tsx";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<LangProvider>
			<ModeProvider>
				<TooltipProvider>
					<Toaster />
					<Sonner />
					<BrowserRouter>
						<ScrollToTop />
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/qr" element={<QRLanguage />} />
							<Route path="/carta" element={<Carta />} />
							<Route path="/carta/:lang" element={<Carta />} />
							{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</TooltipProvider>
			</ModeProvider>
		</LangProvider>
	</QueryClientProvider>
);

export default App;
