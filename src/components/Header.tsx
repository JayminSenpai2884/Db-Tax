import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">DB Bookkeeping & Tax Services</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">647-896-7487</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-sm">dbbookstax@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;