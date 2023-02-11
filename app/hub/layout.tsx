import Header from "@/app/Header";
import loginBg from "@/public/login-bg.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gray-900 bg-auto 2xl:bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBg.src})`}}>
                <Header />
                {children}
            </body>
        </html>
    )
}
