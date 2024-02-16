import { useEffect, useState } from "react";

import {
  EnvelopeIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  PencilIcon,
  LinkIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import Modals from "./modals";

export default function Header() {
  const [hora, setHora] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Iniciar el intervalo al montar el componente
    const intervalId = setInterval(actualizarHora, 1000);

    // Detener el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  function actualizarHora() {
    const fechaActual = new Date();
    const soloHora = fechaActual.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    // Actualiza el estado con la hora actualizada
    setHora(soloHora);
  }

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="avatar-dashboard">
            <img src={`/img/avatar-eje.jpg`} alt={`avatar`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              John Mario
            </h2>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <EnvelopeIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              whoaomi11@gmail.com
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <UserGroupIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Admin
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarDaysIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />

              {isClient ? hora : "Prerendered"}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <LinkIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            View
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            style={{
              background: "#0834AB",
            }}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PencilIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-white-400"
              aria-hidden="true"
            />
            Edit
          </button>
        </span>
        <Modals />
      </div>
    </div>
  );
}
