import Header from "@/app/components/Header";
import loginBg from "@/public/login-bg.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-auto 2xl:bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBg.src})`}}>
                <Header />
                {children}
            </body>
        </html>
    )
}
