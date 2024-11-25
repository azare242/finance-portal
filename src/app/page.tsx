import LoginForm from '@/components/LoginForm/LoginForm';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='h-screen w-screen flex items-center justify-center'>
      <section className='text-center'>
        <LoginForm />
        <Button  variant={"link"} className='w-full mt-4 text-yellow-500 transition-opacity hover:opacity-75'>Create a Binance Account</Button>
      </section>
    </main>
  );
}
