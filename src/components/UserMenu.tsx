
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, Settings, ShoppingBag, Shield, LogIn } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const UserMenu = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };
  
  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild className="flex items-center gap-2">
          <Link to="/login">
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </Link>
        </Button>
        <Button size="sm" asChild className="hidden sm:flex">
          <Link to="/register">Register</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ShoppingBag className="mr-2 h-4 w-4" />
            <Link to="/cart">My Cart</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Account Settings</span>
          </DropdownMenuItem>
          {isAdmin && (
            <DropdownMenuItem>
              <Shield className="mr-2 h-4 w-4" />
              <Link to="/admin">Admin Dashboard</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
