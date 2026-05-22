import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vibe Engineering Workshop | Jeethu LA',
  description: 'Orchestrating AI to Build a Zero-Cost SaaS with Vibe Engineering - A practical workshop on building real-world products using AI-native engineering workflows.',
};

export default function TieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
