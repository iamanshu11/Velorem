export default function Footer() {
    return (
        <footer className=" w-full   px-4 py-8 text-sm bg-gray-100 dark:bg-[#00174F] text-black dark:text-white transition-colors">
             <div className="container mx-auto   px-6 lg:px-6  gap-6 w-full">
                 <h2 className="text-3xl md:text-4xl font-bold  mb-4">
                Velorem
            </h2>
            <p>© {new Date().getFullYear()} Velorem. All rights reserved.</p>

             </div>
        </footer>
    );
}