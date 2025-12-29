import LoginHero from '@/components/authentication/LoginHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Login | Mediatopia - Bristol Web Design',
  description: 'Access your Mediatopia client portal - hosting control panel, support tickets, and webmail access for existing clients.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <LoginHero />
    </main>
  );
};

export default page;
