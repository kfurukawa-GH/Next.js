import { DeviconReact } from "../_components/elements/Icon/DeviconReact";
import LoginForm from "./_components/LoginForm";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="flex flex-col sm:mx-auto sm:w-full sm:max-w-sm">
          <DeviconReact className="w-20 h-20 mx-auto md:w-32 md:h-32 lg:w-40 lg:h-40" />
          <p className="mt-10 text-center font-bold sm:text-xl md:text-2xl lg:text-2xl">Sign in to your account</p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
