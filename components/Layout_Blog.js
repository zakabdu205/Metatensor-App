function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
      <h1 className="font-medium text-xl">Next.js Blog</h1>
      <div>
        <a
          href="https://twitter.com/MarkSShenouda"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Twitter
        </a>
        <a
          href="https://github.com/markshenouda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-center my-4 text-gray-500 text-sm">
      © 2022 Next.js Blog
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-5xl flex flex-col min-h-screen px-4">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
