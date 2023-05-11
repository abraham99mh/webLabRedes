import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { dbFirestore } from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";

const Registro = ({ session, setRegistrarse }) => {
  const [user, setUsuario] = useState(""); // Estado para el valor del usuario
  const [password, setPassword] = useState(""); // Estado para el valor de la contraseña

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user !== "" && password !== "") {
      try {
        const docRef = doc(dbFirestore, "users", user);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("El usuario ya existe");
          alert("El usuario ya existe");
        } else {
          await setDoc(doc(dbFirestore, "users", user), {
            password: password,
          });
          console.log("Usuario registrado");
          session.setSession(true);
          setRegistrarse(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Debes ingresar todos los datos");
    }
  };

  return (
    <div className="card-body items-center text-center">
      <div className="text-4xl font-bold mb-4">Registro</div>
      <form className="w-full px-3">
        <label className="label">
          <span className="label-text">Usuario</span>
        </label>
        <input
          type="text"
          placeholder="usuario..."
          className="input input-bordered w-full max-w-xs mb-3 bg-slate-800 opacity-70"
          value={user}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <label className="label">
          <span className="label-text">Contraseña</span>
        </label>
        <input
          type="password"
          placeholder="contraseña..."
          className="input input-bordered w-full max-w-xs mb-12 bg-slate-800 opacity-70"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-success w-full"
          onClick={handleSubmit}
        >
          Registrarse
        </button>
      </form>
      <div>
        <button
          className="mt-3 btn btn-outline w-full"
          onClick={() => setRegistrarse(false)}
        >
          Ve a iniciar sesión
        </button>
      </div>
    </div>
  );
};

const InicioDeSesion = (session) => {
  // Referencia a la colección usuarios
  const [registrarse, setRegistrarse] = useState(false); // Estado para controlar si se muestra o no el formulario de registro

  const [user, setUsuario] = useState(""); // Estado para el valor del usuario
  const [password, setPassword] = useState(""); // Estado para el valor de la contraseña
  const [opacity, setOpacity] = useState("opacity-0"); // Estado para controlar la opacidad del alerta

  const [showAlert, setShowAlert] = useState(false); // Estado para controlar si se muestra o no el alerta

  // const u = "admin"; // Usuario de ejemplo
  // const p = "admin"; // Contraseña de ejemplo

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user !== "") {
      const docRef = doc(dbFirestore, "users", user);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        if (docSnap.data().password === password) {
          console.log("Inicio de sesión correcto");
          session.setSession(true); // Si el usuario y contraseña son correctos, se llama a la función setSession del componente padre para establecer la sesión como iniciada
        } else {
          setShowAlert(true); // Si el usuario y contraseña son incorrectos, se muestra el alerta
          setOpacity("opacity-100"); // Se establece la opacidad del alerta a 100 para hacerlo visible
          setTimeout(() => {
            setOpacity("opacity-0"); // Después de 2 segundos, se establece la opacidad del alerta a 0 para ocultarlo
            setTimeout(() => {
              setShowAlert(false); // Después de 0.5 segundos, se establece el estado showAlert a false para ocultar completamente el alerta
            }, 500);
          }, 2000);
        }
      } else {
        setShowAlert(true); // Si el usuario y contraseña son incorrectos, se muestra el alerta
        setOpacity("opacity-100"); // Se establece la opacidad del alerta a 100 para hacerlo visible
        setTimeout(() => {
          setOpacity("opacity-0"); // Después de 2 segundos, se establece la opacidad del alerta a 0 para ocultarlo
          setTimeout(() => {
            setShowAlert(false); // Después de 0.5 segundos, se establece el estado showAlert a false para ocultar completamente el alerta
          }, 500);
        }, 2000);
      }
    } else {
      setShowAlert(true); // Si el usuario y contraseña son incorrectos, se muestra el alerta
      setOpacity("opacity-100"); // Se establece la opacidad del alerta a 100 para hacerlo visible
      setTimeout(() => {
        setOpacity("opacity-0"); // Después de 2 segundos, se establece la opacidad del alerta a 0 para ocultarlo
        setTimeout(() => {
          setShowAlert(false); // Después de 0.5 segundos, se establece el estado showAlert a false para ocultar completamente el alerta
        }, 500);
      }, 2000);
    }
  };

  return (
    <>
      {/*alerta */}
      {showAlert && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 mt-12 ${opacity}`}
        >
          <div className="alert duration-200 bg-danger py-0 md:px-4">
            <div className="p-2 md:p-3 text-md">
              <VscChromeClose className="text-white text-6xl md:text-xl mr-2" />
              <span className="text-white font-semibold">
                Usuario o contraseña incorrectos
              </span>
            </div>
          </div>
        </div>
      )}
      {/*login */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-14 font-bold  text-white text-5xl">
        DASHBOARD
      </div>
      <div className="bg-slate-800 py-12 text-white flex justify-center items-center min-h-screen">
        <div className="card bg-slate-700 shadow-xl w-96 py-3 mx-4 md:mx-0">
          {registrarse ? (
            <Registro setRegistrarse={setRegistrarse} session={session} />
          ) : (
            <div className="card-body items-center text-center">
              <div className="text-4xl font-bold mb-4">Inicio de sesión</div>
              <form className="w-full px-3">
                <label className="label">
                  <span className="label-text">Usuario</span>
                </label>
                <input
                  type="text"
                  placeholder="usuario..."
                  className="input input-bordered w-full max-w-xs mb-3 bg-slate-800 opacity-70"
                  value={user}
                  onChange={(e) => setUsuario(e.target.value)}
                />
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="contraseña..."
                  className="input input-bordered w-full max-w-xs mb-12 bg-slate-800 opacity-70"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-success w-full"
                  onClick={handleSubmit}
                >
                  Iniciar
                </button>
              </form>
              <div>
                <button
                  className="mt-3 btn btn-outline w-full"
                  onClick={() => setRegistrarse(true)}
                >
                  Ir a registrarse
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InicioDeSesion;
