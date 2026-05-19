import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PublicSpeaking from "./pages/PublicSpeaking";
import ElocutionVoice from "./pages/ElocutionVoice";
import AccentCoaching from "./pages/AccentCoaching";
import ExecutiveCorporate from "./pages/ExecutiveCorporate";
import PresentationSkills from "./pages/PresentationSkills";
import CommunicationCoaching from "./pages/CommunicationCoaching";
import OnlineCoaching from "./pages/OnlineCoaching";
import TeamWorkshops from "./pages/TeamWorkshops";
import ChildrensCoaching from "./pages/ChildrensCoaching";
import BroadcastMedia from "./pages/BroadcastMedia";
import Leaders from "./pages/Leaders";
import SpeechCoachingFounders from "./pages/SpeechCoachingFounders";
import Professionals from "./pages/Professionals";
import Hospitality from "./pages/Hospitality";
import MedicalProfessionals from "./pages/MedicalProfessionals";
import Government from "./pages/Government";
import Charities from "./pages/Charities";
import CryptoBlockchain from "./pages/CryptoBlockchain";
import UnitedNations from "./pages/UnitedNations";
import StammeringFluency from "./pages/StammeringFluency";
import VoiceCoaching from "./pages/VoiceCoaching";
import Pricing from "./pages/Pricing";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/public-speaking-coaching" element={<PublicSpeaking />} />
        <Route path="/elocution-voice-coaching" element={<ElocutionVoice />} />
        <Route path="/accent-coaching" element={<AccentCoaching />} />
        <Route path="/executive-corporate-coaching" element={<ExecutiveCorporate />} />
        <Route path="/presentation-skills-coaching" element={<PresentationSkills />} />
        <Route path="/communication-coaching" element={<CommunicationCoaching />} />
        <Route path="/online-coaching" element={<OnlineCoaching />} />
        <Route path="/team-workshops" element={<TeamWorkshops />} />
        <Route path="/speech-coaching-children" element={<ChildrensCoaching />} />
        <Route path="/broadcast-media-coaching" element={<BroadcastMedia />} />
        <Route path="/speech-coaching-leaders" element={<Leaders />} />
        <Route path="/speech-coaching-founders" element={<SpeechCoachingFounders />} />
        <Route path="/speech-coaching-professionals" element={<Professionals />} />
        <Route path="/speech-coaching-hospitality" element={<Hospitality />} />
        <Route path="/speech-coaching-medical" element={<MedicalProfessionals />} />
        <Route path="/speech-coaching-government" element={<Government />} />
        <Route path="/speech-coaching-charities" element={<Charities />} />
        <Route path="/speech-coaching-crypto" element={<CryptoBlockchain />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
