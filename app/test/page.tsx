import '@/app/globals.css'
import '@/app/loading.css'

function Page() {
    return (
        <div className="w-screen h-screen bg-gray-800 flex items-center justify-center">
            <span className="loader"></span>
        </div>
    );
}

export default Page;