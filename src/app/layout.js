export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Website is</h1>
       
        </header>

        {children}

        <footer>
          <p>My Footer</p>
      
        </footer>
      </body>
    </html>
  );
}
export const metadata = {
  title: "About Us",
  description: "Learn about our company",
};
