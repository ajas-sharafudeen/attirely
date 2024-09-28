import { AlignJustify, LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { logoutUser, resetTokenAndCredentials } from '@/store/auth-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    // dispatch(logoutUser());
    dispatch(resetTokenAndCredentials());
    sessionStorage.clear();
    navigate('/auth/login');
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-bold shadow"
        >
          <LogOut />
          Log out
        </Button>
      </div>
    </header>
  );
}
