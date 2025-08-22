import { LoginForm } from "../auth/components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="grid min-h-dvh place-items-center p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-center text-2xl font-semibold">
          Pokémon Finder
        </h1>
        <p className="mb-6 text-center text-sm text-slate-500">
          Sign in with admin/admin
        </p>
        <LoginForm />
      </div>
    </div>
  );
};
