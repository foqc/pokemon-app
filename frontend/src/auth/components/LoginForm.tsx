import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type FormValues = z.infer<typeof schema>;

export const LoginForm = () => {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setError(null);
    try {
      await login(data.username, data.password);
      location.assign("/");
    } catch (e) {
      setError("Wrong username or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 rounded-xl bg-white shadow-md max-w-sm mx-auto"
    >
      <div>
        <label className="mb-1 block text-sm font-medium">Username</label>
        <input
          className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring focus:ring-blue-300"
          placeholder="admin"
          autoComplete="username"
          {...register("username")}
        />
        {errors.username && (
          <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Password</label>
        <input
          type="password"
          className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring focus:ring-blue-300"
          placeholder="admin"
          autoComplete="current-password"
          {...register("password")}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {error && <p className="text-sm text-red-600 text-center">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};
