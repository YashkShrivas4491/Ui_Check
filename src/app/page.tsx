import Navbar from "@/components/Navbar";
import { TabsDemo } from "@/components/TabsDemo";
import { SparklesPreview } from "@/components/SparklesPreview";
import { FlipWordsDemo } from "@/components/FlipWordsDemo";
export default function Home() {
  return (
    <>
      <Navbar />
      <FlipWordsDemo />
      <TabsDemo />
      <SparklesPreview />
    </>
  );
}
