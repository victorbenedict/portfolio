import { admin } from '@/lib/data';

export default function Footer() {
  return (
    <footer>
      <div className='md:max-w-3xl flex py-2.5 justify-center md:px-0 md:mx-auto mx-4 max-w-screen text-sm text-muted-foreground'>
        <div>
          <span>Built by </span>
          <a
            href={admin.url}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold hover:underline'
          >
            {admin.name}
          </a>
          <span>. The source code is available on </span>
          <a
            href='https://github.com/victorbenedict/portfolio'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold hover:underline'
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
