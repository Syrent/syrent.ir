import Header from "@/app/components/Header";
import loginBg from "@/public/login-bg.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    return (
        <html lang="en">
            <head />
            <body className="bg-auto 2xl:bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBg.src})`}}>
                <Header />
                {children}
            </body>
        </html>
    )
}
