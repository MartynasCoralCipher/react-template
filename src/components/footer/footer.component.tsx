export const Footer = () => {
  return (
    <footer className="w-full h-30 p-8 flex flex-col items-center justify-center space-y-3 bg-[#121212]">
      {/* Big Footer Text */}
      <h2 className="text-white text-3xl font-bold">Footer</h2>
      
      {/* White HR Line */}
      <hr className="w-full border-white border-2" />
      
      {/* Simple Text */}
      <p className="text-white text-base">This is a footer</p>
    </footer>
  );
};