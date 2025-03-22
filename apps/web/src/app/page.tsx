import Link from 'next/link';

import Container from '@/components/layout/container';
import { Button } from '@/components/shadcn-ui/button';

export default function HomePage() {
  return (
    <Container>
      <Button asChild>
        <Link href="/example" aria-label="Example page">
          See Example
        </Link>
      </Button>
    </Container>
  );
}
