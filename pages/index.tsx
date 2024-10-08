import PageContainer from "@/components/page-container";
import Link from "next/link";


export default function Home() {
  return (
    <PageContainer>
      <Link href='/task/create'>
        Create task</Link>
    </PageContainer>
  );
}
