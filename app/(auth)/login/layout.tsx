import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { redirect } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default async function LoginPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container p-20 mx-auto text-center">
      <Card className="mx-auto max-w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre com email e senha</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <Link
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'mt-2 mx-auto'
            )}
            href="/register"
          >
            Não possui conta?
          </Link>
        </CardFooter>
      </Card>
      <Link
        className={cn(buttonVariants({ variant: 'link', size: 'lg' }), 'mt-8')}
        href="/"
      >
        Voltar para Home
      </Link>
    </main>
  );
}